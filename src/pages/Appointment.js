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
            my={4}
            bgcolor="cyan"
            display="flex"
            alignItems="start"
            justifyContent="center"
            gap={4}
            sx={{
              width: 700,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Часи роботи: пон - сб 9:00-19:00
            </Typography>
          </Box>
        </Box>
        <Box m={3} bgcolor="cyan" sx={{}}>
          <Typography variant="body1" color="text.secondary">
            Записатися: 066-000-00-00
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

export default Appointmnent;
