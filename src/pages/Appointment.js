import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";

function Appointmnent() {
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "85vh",
        }}
      >
        <Header />

        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
          }}
        >
          <Box
            p={3}
            // bgcolor="cyan"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={3}
            // sx={{
            //   width: 700,
            // }}
          >
            <Typography variant="h5" color="text.secondary">
              Часи роботи:
            </Typography>
            <Typography variant="h5" color="text.secondary">
              пон - сб 9:00-19:00
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Для запису або якщо виникли запитання телефонуйте або пишіть у
              один з месенджерів:
            </Typography>
            <Typography variant="h6" color="text.accent">
              Зателефонувати:{" "}
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
            <Typography variant="h5" color="text.secondary">
              Часи роботи:
            </Typography>
            <Typography variant="h4" color="text.secondary">
              з понеділка по суботу з 9:00 до 19:00
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

export default Appointmnent;
