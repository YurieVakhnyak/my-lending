import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";
import CardArticle from "../components/CardArticle";
import "../App.css";

function Articles() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch(`/data/articles/index.json?v=${Date.now()}`)

      .then((res) => res.json())
      .then((data) => setArticleData(data));
  }, []);

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
            articleLink={`/articles/${article.slug}`} // Генеруємо маршрут для статті
          />
        ))}
      </Box>
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default Articles;
