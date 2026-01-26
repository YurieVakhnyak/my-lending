import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Telegram, Facebook, Instagram, YouTube } from "@mui/icons-material";
import { blue, pink, red } from "@mui/material/colors";
// import { pink } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        color: "whitesmoke",
        bgcolor: "#1a237e",
        py: 3,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Container>
        {/* <Typography variant="h6" gutterBottom>
          Мої соцмережі
        </Typography> */}
        <Box>
          <IconButton
            component="a"
            sx={{
              color: "inherit",
              "&:hover": {
                color: blue[500],
              },
            }}
            href="https://www.facebook.com/yurie.vakhnyak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            sx={{
              color: "inherit",
              "&:hover": {
                color: pink[300],
              },
            }}
            // sx={{ color: pink[300] }}
            href="https://www.instagram.com/yurievakhnyak/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            sx={{
              color: "inherit",
              "&:hover": {
                color: blue[400],
              },
            }}
            href="https://t.me/yurievakhnyak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Посилання на мій Telegram"
          >
            <Telegram />
          </IconButton>
          <IconButton
            component="a"
            sx={{
              color: "inherit",
              "&:hover": {
                color: red[500],
              },
            }}
            href="https://www.youtube.com/channel/UCBgw-k7e2s4QHg9pistr-3A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube канал Юрія Вахняка"
          >
            <YouTube />
          </IconButton>
        </Box>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} YurieVakhnyak. All rights reserved.
        </Typography>
      </Container>
      {/* <div className="footer-ready"></div> */}
    </Box>
  );
};

export default Footer;
