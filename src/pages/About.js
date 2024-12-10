import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import { AboutBio } from "../data/TextConstants";
import Footer from "../components/Footer";
import ProgressiveImageCard from "../components/ProgressiveImageCard";
import EducationDocs from "../components/EducationDocs";
import AppointmentButton from "../components/AppointmentButton";
import "../App.css";

function About() {
  return (
    <Container disableGutters maxWidth={false}>
      <Header />
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          // height: "85vh",
        }}
      >
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            // bgcolor: "white",

            p: 2,
            // height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
          }}
        >
          <Box
            // my={4}
            display="flex"
            alignItems="start"
            justifyContent="center"
            gap={4}
            sx={{
              width: 700,
            }}
          >
            <Typography variant="body1" color="text.secondary"></Typography>
            {AboutBio}
          </Box>
          <ProgressiveImageCard />
        </Box>
        <Box
          p={2}
          sx={
            {
              // bgcolor: "cyan",
            }
          }
        >
          <EducationDocs />
        </Box>
        <Box></Box>
      </Box>
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default About;
