import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/articles/index.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.slug === id);
        setArticle(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка при завантаженні статей:", err);
        setArticle(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Typography>Завантаження...</Typography>
      </Container>
    );
  }

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
      <Container sx={{ p: 2, textAlign: "justify" }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 1,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "justify", textIndent: "2em" }}
          component="div"
          dangerouslySetInnerHTML={{ __html: article.text }}
        />
      </Container>
      <Footer />
    </Container>
  );
}

export default ArticlePage;
