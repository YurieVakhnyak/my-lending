import React from "react";
import { useParams } from "react-router-dom";
import { articleData } from "../data/ArticleData"; // імпорт даних статей
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";

function ArticlePage() {
  const { id } = useParams(); // Отримуємо параметр id з маршруту
  const article = articleData[id]; // Знаходимо статтю за індексом

  if (!article) {
    return (
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "#cfe8fc",
        }}
      >
        <Header />

        <Typography
          variant="h5"
          sx={{ marginTop: "16px", textAlign: "center" }}
        >
          Стаття не знайдена
        </Typography>

        <AppointmentButton />
        <Footer />
      </Container>
    );
  }

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#cfe8fc",
      }}
    >
      <Header />
      <Box
        sx={{
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            // marginTop: 2,
            marginBottom: 1,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {article.title}
        </Typography>
        {article.text.split("\n").map((paragraph, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              textIndent: "2em",
              marginBottom: 1,
              textAlign: "justify",
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>

      <Footer />
    </Container>
  );
}

export default ArticlePage;
