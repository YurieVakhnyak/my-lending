import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/system";

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  // Початкова прозорість
  opacity: 0.5,
  // Плавний перехід для властивості opacity (0.3 секунди)
  transition: "opacity 0.3s ease-in-out, transform 0.5s ease-in-out",
  
  "&:hover": {
    opacity: 1, // Повна непрозорість при наведенні
    // За бажанням можна додати легке збільшення
    // transform: "scale(1.1)",
  },
}));

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    // pageYOffset вважається застарілим, краще window.scrollY
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Zoom тепер відповідає лише за появу кнопки
    <Zoom in={visible}>
      <ScrollTopButton
        color="primary"
        onClick={handleClick}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </ScrollTopButton>
    </Zoom>
  );
}

export default ScrollToTopButton;