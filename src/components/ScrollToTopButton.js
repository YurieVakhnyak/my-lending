import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/system";

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  //   display: "none",
}));

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
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
    <Zoom
      in={visible}
      sx={{
        opacity: 0.5, // Set the desired opacity here
        "&:hover": {
          opacity: 1, // Fully opaque on hover
        },
      }}
    >
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
