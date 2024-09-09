import * as React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";
import { Telegram, Facebook, Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { blue, pink, green } from "@mui/material/colors";
function Appointmnent() {
  return (
    <Container disableGutters maxWidth={false}>
      <Header />

      <Box
        p={3}
        sx={{
          bgcolor: "#cfe8fc",
          minHeight: "65vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        <Box
          p={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          // sx={{
          //   width: 700,
          // }}
        >
          <Typography variant="h5" color="text.secondary">
            Для запису або запитань пишіть:
          </Typography>
          <Box>
            <IconButton
              // fontSize="large"
              component="a"
              sx={{
                color: green[500],
                "&:hover": {
                  color: green[300],
                },
              }}
              href="https://www.WhatsApp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component="a"
              sx={{
                color: blue[400],
                "&:hover": {
                  color: blue[300],
                },
              }}
              href="https://www.telegram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Telegram />
            </IconButton>
            <IconButton
              component="a"
              sx={{
                color: blue[500],
                // "&:hover": {
                //   color: blue[400],
                // },
              }}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              sx={{
                color: pink[300],
                "&:hover": {
                  color: pink[500],
                },
              }}
              // sx={{ color: pink[300] }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
          </Box>

          <Typography variant="h6" color="text.accent">
            або телефонуйте:{" "}
          </Typography>
          <Typography variant="h5" color="text.accent">
            <a
              href="tel:0660000000"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              066-000-00-00
            </a>
            ,{" "}
            <a
              href="tel:0680000000"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              068-000-00-00
            </a>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Часи роботи:
          </Typography>
          <Typography variant="h5" color="text.secondary">
            понеділок - субота з 9:00 до 19:00
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

export default Appointmnent;
