import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardTest({
  testTitle = "Тест",
  testDescription = "Опис тесту",
  testLink = "#",
}) {
  //   const maxDescriptionLength = 200;

  //   // Обрізаний текст опису тесту
  //   const truncatedDescription =
  //     testDescription.length > maxDescriptionLength
  //       ? testDescription.substring(0, maxDescriptionLength) + "..."
  //       : testDescription;

  return (
    <Card
      sx={{
        bgcolor: "#bbdefb",
        minWidth: 275,
        maxWidth: 400,
        margin: "16px auto",
      }}
    >
      <CardContent>
        {/* Заголовок тесту */}
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: "8px", textAlign: "center" }}
        >
          {testTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, textAlign: "justify", textIndent: "2em" }}
        >
          {testDescription}
        </Typography>
        <Button
          component={Link}
          to={testLink}
          variant="text"
          sx={{ marginTop: "16px" }}
        >
          Пройти тест
        </Button>
      </CardContent>
    </Card>
  );
}
