import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";
import CardArticle from "../components/CardArticle";
import "../App.css";

function Articles() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        bgcolor: "#cfe8fc",
      }}
    >
      <Header />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <CardArticle
          title="Як знайти баланс у житті"
          text="У цій статті ви дізнаєтеся про методи пошуку гармонії між роботою, особистим життям та відпочинком."
          date="24.12.2023"
          articleLink="https://example.com/article-1"
          maxTextLength={120}
        />

        <CardArticle
          title="Секрети ефективної комунікації"
          text="Комунікація є ключовим фактором успіху в стосунках. Дізнайтеся, як покращити свої навички спілкування."
          date="22.12.2023"
          articleLink="https://example.com/article-2"
        />

        {/* Без параметрів (використовуються значення за замовчуванням) */}
        <CardArticle />
      </Box>
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default Articles;
