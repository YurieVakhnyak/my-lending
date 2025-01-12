import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import * as React from "react";
import "../App.css";

import ProgressiveImageCard from "../components/ProgressiveImageCard";
import lowQualityImage from "../components/images/mainphoto-min.jpg";
import mediumQualityImage from "../components/images/mainphoto-mid.jpg";
import highQualityImage from "../components/images/mainphoto.jpg";
import { AboutMyProfession } from "../data/TextConstants";

function AboutMeShort() {
  return (
    <Box
      display={"flex"}
      sx={{
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        p: 3,
        bgcolor: "#bbdefb",
      }}
    >
      <Box width={400} sx={{ textAlign: "justify", p: 3 }}>
        {AboutMyProfession.split("\n").map((paragraph, index) => (
          <Typography
            key={index}
            variant="body2"
            color="text.secondary"
            sx={{
              textIndent: "2em",
            }}
          >
            {paragraph}
          </Typography>
        ))}
        {/* <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textIndent: "2em",
          }}
        >
          {AboutMyProfession}
        </Typography> */}
      </Box>
      <ProgressiveImageCard
        lowQualityImage={lowQualityImage}
        mediumQualityImage={mediumQualityImage}
        highQualityImage={highQualityImage}
        width={300} // Ширина картки
        height={250} // Висота картки
        title="Yurie Vakhnyak's Photo"
      />
    </Box>
  );
}

export default AboutMeShort;
