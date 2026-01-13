import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useLocation, useNavigate } from "react-router-dom";

function FloatingAppointmentButton() {
  const [showBottom, setShowBottom] = useState(true); // Кнопка в самому низу
  const [showShifted, setShowShifted] = useState(false); // Кнопка вище
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const nearBottom = windowHeight + scrollY > totalHeight - 200;

      if (nearBottom) {
        // Ховаємо обидві кнопки біля футера
        setShowBottom(false);
        setShowShifted(false);
      } else {
        if (scrollY > 300) {
          // Коли проскролили 300px: нижня зникає, верхня з'являється
          setShowBottom(false);
          setShowShifted(true);
        } else {
          // Коли ми вгорі: нижня з'являється, верхня зникає
          setShowBottom(true);
          setShowShifted(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname === "/appointment") return null;

  return (
    <>
      {/* ВАРІАНТ 1: Нижня кнопка (до 300px) */}
      <Zoom in={showBottom} unmountOnExit>
        <Fab
          color="primary"
          onClick={() => navigate("/appointment")}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1300,
            opacity: 0.8,
            transition: "opacity 0.3s ease",
            "&:hover": { opacity: 1 }
          }}
        >
          <ChatIcon />
        </Fab>
      </Zoom>

      {/* ВАРІАНТ 2: Верхня кнопка (після 300px) */}
      <Zoom in={showShifted} unmountOnExit>
        <Fab
          color="primary"
          onClick={() => navigate("/appointment")}
          sx={{
            position: "fixed",
            bottom: 80, 
            right: 16,
            zIndex: 1300,
            opacity: 0.8,
            transition: "opacity 0.3s ease",
            "&:hover": { opacity: 1 }
          }}
        >
          <ChatIcon />
        </Fab>
      </Zoom>
    </>
  );
}

export default FloatingAppointmentButton;


