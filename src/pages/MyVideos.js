import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";
import "../App.css";
import CardVideo from "../components/CardVideo";
import { videoLinks } from "../data/VideoLinkConstants";

function MyVideos() {
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
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {videoLinks.map((videoId, index) => (
          <CardVideo
            key={index + videoId}
            videoUrl={`https://www.youtube.com/embed/${videoId}`}
          />
        ))}
      </Box>
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default MyVideos;
