import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import YouTubeVideo from "./YouTubeVideo";

export default function CardVideo({
  title = "Заголовок відео",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  date = "01.01.2023",
  videoLink = "#",
  videoUrl,
  maxDescriptionLength = 100, // Максимальна кількість символів до трикрапки
}) {
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

        {/* Дата публікації */}
        <Typography
          sx={{ color: "text.secondary", fontSize: 14, marginBottom: "16px" }}
        >
          {date}
        </Typography>

        {/* Обрізаний опис відео */}
        <Typography variant="body2" sx={{ marginBottom: "16px" }}>
          {truncatedDescription}
        </Typography>
        <YouTubeVideo videoUrl={videoUrl} />
      </CardContent>
    </Card>
  );
}
