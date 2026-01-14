import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import "../App.css";

import ProgressiveImageCard from "../components/ProgressiveImageCard";
import lowQualityImage from "../components/images/main_photo_yurie_vakhnyak_low.jpg";
import mediumQualityImage from "../components/images/main_photo_yurie_vakhnyak_mid.jpg";
import highQualityImage from "../components/images/main_photo_yurie_vakhnyak_high.jpg";
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
      <Box width={450} sx={{ textAlign: "justify", p: 3 }}>
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
      
      </Box>
      <ProgressiveImageCard
        lowQualityImage={lowQualityImage}
        mediumQualityImage={mediumQualityImage}
        highQualityImage={highQualityImage}
        width={250} // Ширина картки
        height={300} // Висота картки
        title="Yurie Vakhnyak's Photo"
       
      />
    </Box>
  );
}

export default AboutMeShort;
