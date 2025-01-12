import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function CardArticle({
  title = "Заголовок",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  date = "01.01.2023",
  articleLink = "#",
  maxTextLength = 300,
}) {
  const truncatedText =
    text.length > maxTextLength
      ? text.substring(0, maxTextLength) + "..."
      : text;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, margin: "16px auto" }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: 14, marginTop: 1 }}>
          {date}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, textAlign: "justify", textIndent: "2em" }}
        >
          {truncatedText}
        </Typography>
        <Button
          component={Link}
          to={articleLink}
          variant="contained"
          sx={{ marginTop: "16px" }}
        >
          Читати більше
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardArticle;
