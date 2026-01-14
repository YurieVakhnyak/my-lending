

import React, { useState, useEffect } from "react";
import { Card, CardMedia } from "@mui/material";

const ProgressiveImageCard = ({
  lowQualityImage,
  mediumQualityImage,
  highQualityImage,
  width = 350,
  height = 300,
  title = "Photo",
  sx = {},
}) => {
  const [imageSrc, setImageSrc] = useState(lowQualityImage); // Початкове зображення

  useEffect(() => {
    // Завантаження зображення середньої якості
    const mediumImage = new Image();
    mediumImage.src = mediumQualityImage;
    mediumImage.onload = () => setImageSrc(mediumQualityImage);

    // Завантаження зображення високої якості
    const highImage = new Image();
    highImage.src = highQualityImage;
    highImage.onload = () => setImageSrc(highQualityImage);
  }, [mediumQualityImage, highQualityImage]);

  return (
    <Card sx={{ width }}>
      <CardMedia sx={{ height }} image={imageSrc} title={title} />
    </Card>
  );
};

export default ProgressiveImageCard;
