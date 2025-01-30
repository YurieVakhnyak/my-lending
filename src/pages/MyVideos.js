import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";
import CardVideo from "../components/CardVideo";
import videoData from "../data/VideoData";
import CookieBanner from "../components/CookieBanner";

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
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {videoData.map((video, index) => (
          <CardVideo
            key={index}
            videoId={video.videoId}
            title={video.title}
            description={video.description}
            date={video.date}
          />
        ))}
      </Box>
      <CookieBanner />
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default MyVideos;
