import React from "react";
import { Helmet } from "react-helmet-async"; // Додано
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentButton from "../components/AppointmentButton";
import CardVideo from "../components/CardVideo";
import videoData from "../data/VideoData";
import CookieBanner from "../components/CookieBanner";

function MyVideos() {
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
        <Helmet>
          <title>Відеолекції та поради психолога | Юрій Вахняк</title>
          <meta 
            data-rh="true"
            name="description" 
            content="Дивіться корисні відео про психологію: розбори складних станів, поради щодо самодопомоги та відповіді на поширені запитання від психолога Юрія Вахняка." 
          />
          <meta data-rh="true" property="og:title" content="Психологія у відеоформаті | Юрій Вахняк" />
          <meta data-rh="true" property="og:description" content="Відеоматеріали про ментальне здоров'я, тривогу та методи терапії." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://psy-yv.com.ua/videos" />
          <link rel="canonical" href="https://psy-yv.com.ua/videos" />
        </Helmet>

        <Header />
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", py: 2 }}>
          {videoData.map((video, index) => (
            <CardVideo
              key={index}
              videoId={video.videoId}
              title={video.title}
              description={video.description}
              date={video.date}
            />
          ))}
        </Box>
        <CookieBanner />
        <AppointmentButton />
        <Footer />
      </Container>

  );
}

export default MyVideos;


// import React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import AppointmentButton from "../components/AppointmentButton";
// import CardVideo from "../components/CardVideo";
// import videoData from "../data/VideoData";
// import CookieBanner from "../components/CookieBanner";

// function MyVideos() {
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
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {videoData.map((video, index) => (
//           <CardVideo
//             key={index}
//             videoId={video.videoId}
//             title={video.title}
//             description={video.description}
//             date={video.date}
//           />
//         ))}
//       </Box>
//       <CookieBanner />
//       <AppointmentButton />
//       <Footer />
//     </Container>
//   );
// }

// export default MyVideos;
