import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";
import CardArticle from "../components/CardArticle";
import { transliterate } from "../utils/Transliterate";
import "../App.css";
import { articleData } from "../data/ArticleData";

function Articles() {
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
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {articleData.map((article, index) => (
          <CardArticle
            key={index}
            title={article.title}
            text={article.text}
            date={article.date}
            articleLink={`/articles/${transliterate(article.title)}`} // Генеруємо маршрут для статті
          />
        ))}
      </Box>
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default Articles;
