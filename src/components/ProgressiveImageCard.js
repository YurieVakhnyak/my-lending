import React, { useState, useEffect } from "react";
import { Card, CardMedia } from "@mui/material";
import lowQualityImage from "../components/images/mainphoto-min.jpg";
import mediumQualityImage from "../components/images/mainphoto-mid.jpg";
import highQualityImage from "../components/images/mainphoto.jpg";

const ProgressiveImageCard = () => {
  //   const lowQuali "../components/images/mainphoto.jpg"; // зображення найвищої якості

  const [imageSrc, setImageSrc] = useState(lowQualityImage); // починаємо з найнижчої якості

  useEffect(() => {
    // Спочатку завантажуємо зображення середньої якості
    const mediumImage = new Image();
    mediumImage.src = mediumQualityImage;
    mediumImage.onload = () => setImageSrc(mediumQualityImage);

    // Потім завантажуємо зображення найвищої якості
    const highImage = new Image();
    highImage.src = highQualityImage;
    highImage.onload = () => setImageSrc(highQualityImage);
  }, [mediumQualityImage, highQualityImage]);

  return (
    <Card sx={{ width: 350 }}>
      <CardMedia sx={{ height: 250 }} image={imageSrc} title="yurie" />
    </Card>
  );
};

export default ProgressiveImageCard;
