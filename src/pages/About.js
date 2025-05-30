import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import { AboutBio } from "../data/TextConstants";
import Footer from "../components/Footer";
import EducationDocs from "../components/EducationDocs";
import AppointmentButton from "../components/AppointmentButton";
import ProgressiveImageCard from "../components/ProgressiveImageCard";
import lowQualityImage from "../components/images/photo_yurie_vakhnyak_min.jpg";
import mediumQualityImage from "../components/images/photo_yurie_vakhnyak_mid.jpg";
import highQualityImage from "../components/images/photo_yurie_vakhnyak.jpg";
import "../App.css";

function About() {
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
        sx={{
          bgcolor: "#cfe8fc",
        }}
      >
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexGrow: 1,
          }}
        >
          <Box
            justifyContent="center"
            gap={4}
            sx={{
              width: 700,
              textAlign: "justify",
              p: 3,
            }}
          >
            {AboutBio.split("\n").map((paragraph, index) => (
              <Typography
                key={index}
                variant="body2"
                color="text.secondary"
                sx={{
                  textIndent: "2em",
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
          <ProgressiveImageCard
            lowQualityImage={lowQualityImage}
            mediumQualityImage={mediumQualityImage}
            highQualityImage={highQualityImage}
            width={200} // Ширина картки
            height={200} // Висота картки
            title="Yurie Vakhnyak's Photo"
          />
        </Box>
        <Box p={2} sx={{ mt: "auto" }}>
          <EducationDocs />
        </Box>
      </Box>
      <AppointmentButton sx={{ mt: "auto" }} />
      <Footer />
    </Container>
  );
}

export default About;
