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
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#cfe8fc",
      }}
    >
      <Header />

      <Box
        p={3}
        sx={{
          bgcolor: "#cfe8fc",
          minHeight: "65vh",
          textAlign: "center",
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
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              textAlign: "center",
            }}
          >
            Для запису на онлайн-консультацію або запитань пишіть:
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              component="a"
              sx={{
                color: green[400],
                "&:hover": {
                  color: green[500],
                },
              }}
              href="https://wa.me/380688964409"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton
              component="a"
              sx={{
                color: blue[300],
                "&:hover": {
                  color: blue[500],
                },
              }}
              href="https://t.me/yurievakhnyak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Зв'язатися зі мною через Telegram"
            >
              <Telegram sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton
              component="a"
              sx={{
                color: blue[400],
                "&:hover": {
                  color: blue[500],
                },
              }}
              href="https://www.facebook.com/yurie.vakhnyak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook sx={{ fontSize: "2rem" }} />
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
              href="https://www.instagram.com/yurievakhnyak/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram yurievakhnyak"
            >
              <Instagram sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Box>
          <Typography variant="h6" color="text.secondary">
            або телефонуйте:{" "}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
            }}
          >
            <a
              href="tel:0663930429"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              066-393-04-29,
            </a>
            {"  "}
            <a
              href="tel:0688964409"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              068-896-44-09
            </a>
          </Typography>

          <Typography variant="h6" color="text.secondary">
            Часи роботи:
          </Typography>
          <Typography variant="h5" color="text.secondary">
            понеділок - субота
          </Typography>
          <Typography variant="h5" color="text.secondary">
            з 9:00 до 19:00
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

export default Appointmnent;
