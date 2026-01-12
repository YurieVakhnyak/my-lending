import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";

const FloatingCTA = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10), // трохи вище ніж ScrollToTop
  right: theme.spacing(2),
  zIndex: 1300,
}));

function FloatingAppointmentButton() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.body.offsetHeight - 200;

      setVisible(window.scrollY > 350 && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ❗ НЕ показуємо на сторінці запису
  if (location.pathname === "/appointment") return null;

  return (
    <Zoom in={visible}>
      <FloatingCTA
        color="primary"
        onClick={() => navigate("/appointment")}
        aria-label="Записатися на консультацію"
      >
        <ChatIcon />
      </FloatingCTA>
    </Zoom>
  );
}

export default FloatingAppointmentButton;
