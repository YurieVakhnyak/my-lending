import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import YouTubeVideo from "./YouTubeVideo";

export default function CardVideo({ videoId, title, description }) {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const maxDescriptionLength = 200;

  // Обрізаний текст опису відео
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..."
      : description;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, margin: "16px auto" }}>
      <CardContent>
        {/* Заголовок відео */}
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, textAlign: "justify", textIndent: "2em" }}
        >
          {truncatedDescription}
        </Typography>
        <YouTubeVideo videoUrl={videoUrl} />
      </CardContent>
    </Card>
  );
}
