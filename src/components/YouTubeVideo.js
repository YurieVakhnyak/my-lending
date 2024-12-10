import React from "react";
import { Box } from "@mui/material";

const YouTubeVideo = () => {
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
      {/* <iframe
        width="560"
        height="315"
        src="https://youtu.be/C0qzAYBA8gY?si=rzxARp2XNvbaVZOa"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/e4whufQDnU0?si=Ka03gY0e0JIpCIHV"
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
