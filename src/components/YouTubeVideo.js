import React from "react";
import { Box } from "@mui/material";

const YouTubeVideo = ({
  videoUrl = "https://www.youtube.com/embed/e4whufQDnU0",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "56.25%", // Співвідношення сторін 16:9
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        backgroundColor: "#000",
        "& iframe": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Box>
  );
};

export default YouTubeVideo;
