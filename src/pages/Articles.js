import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Додано
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
    <HelmetProvider>
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
        {/* Блок для SEO мета-тегів */}
        <Helmet>
          <title>Статті та корисні матеріали | Психолог Юрій Вахняк</title>
          <meta 
            name="description" 
            content="Блог психолога Юрія Вахняка: статті про тривогу, депресію, стосунки та методи самодопомоги. Читайте професійні поради онлайн." 
          />
          <meta property="og:title" content="Статті та корисні матеріали | Юрій Вахняк" />
          <meta property="og:description" content="Корисні публікації про ментальне здоров'я та психологічну допомогу." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://psy-yv.com.ua/articles" />
        </Helmet>

        <Header />
        <Box sx={{ display: "flex", flexWrap: "wrap", p: 2, justifyContent: "center" }}>
          {articleData.map((article, index) => (
            <CardArticle
              key={index}
              title={article.title}
              text={article.text}
              date={article.date}
              articleLink={`/articles/${article.slug}`}
            />
          ))}
        </Box>
        <AppointmentButton />
        <Footer />
      </Container>
    </HelmetProvider>
  );
}

export default Articles;


// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import AppointmentButton from "../components/AppointmentButton";
// import CardArticle from "../components/CardArticle";
// import "../App.css";

// function Articles() {
//   const [articleData, setArticleData] = useState([]);

//   useEffect(() => {
//     fetch(`/data/articles/index.json?v=${Date.now()}`)

//       .then((res) => res.json())
//       .then((data) => setArticleData(data));
//   }, []);

//   return (
//     <Container
//       disableGutters
//       maxWidth={false}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//         bgcolor: "#cfe8fc",
//       }}
//     >
//       <Header />
//       <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//         {articleData.map((article, index) => (
//           <CardArticle
//             key={index}
//             title={article.title}
//             text={article.text}
//             date={article.date}
//             articleLink={`/articles/${article.slug}`} // Генеруємо маршрут для статті
//           />
//         ))}
//       </Box>
//       <AppointmentButton />
//       <Footer />
//     </Container>
//   );
// }

// export default Articles;
