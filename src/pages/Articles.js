import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";
import "../App.css";

function Articles() {
  return (
    <Container disableGutters maxWidth={false}>
      <Header />
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          // height: "85vh",
        }}
      >
        <Box></Box>
      </Box>
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default Articles;
