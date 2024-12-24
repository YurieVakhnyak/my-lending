import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import { AboutBio } from "../data/TextConstants";
import Footer from "../components/Footer";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import EducationDocs from "../components/EducationDocs";
import AppointmentButton from "../components/AppointmentButton";
import ProgressiveImageCard from "../components/ProgressiveImageCard";
import lowQualityImage from "../components/images/photo_yurie_vakhnyak_min.jpg";
import mediumQualityImage from "../components/images/photo_yurie_vakhnyak_mid.jpg";
import highQualityImage from "../components/images/photo_yurie_vakhnyak.jpg";
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
          <ProgressiveImageCard
            lowQualityImage={lowQualityImage}
            mediumQualityImage={mediumQualityImage}
            highQualityImage={highQualityImage}
            width={250} // Ширина картки
            height={250} // Висота картки
            title="Yurie Vakhnyak's Photo"
          />
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
