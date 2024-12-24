import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardArticle({
  title = "Заголовок",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  date = "01.01.2023",
  articleLink = "#",
  maxTextLength = 100, // Максимальна кількість символів до трикрапки
}) {
  // Обрізаний текст із трикрапкою
  const truncatedText =
    text.length > maxTextLength
      ? text.substring(0, maxTextLength) + "..."
      : text;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, margin: "16px auto" }}>
      <CardContent>
        {/* Заголовок статті */}
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

        {/* Обрізаний текст статті */}
        <Typography variant="body2" sx={{ marginBottom: "16px" }}>
          {truncatedText}
        </Typography>
      </CardContent>

      {/* Кнопка з посиланням на всю статтю */}
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={articleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Читати більше
        </Button>
      </CardActions>
    </Card>
  );
}
