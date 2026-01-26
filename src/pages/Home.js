import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutMeShort from "../components/AboutMeShort";
import HowToStart from "../components/HowToStart";
import AppointmentButton from "../components/AppointmentButton";
import AreasOfWork from "../components/AreasOfWork";
import MoreButton from "../components/MoreButton";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <HelmetProvider>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ bgcolor: "#cfe8fc" }}
      >
        <Helmet>
          {/* Основні мета-теги */}
          <title>Психолог онлайн — Юрій Вахняк</title>
          <meta 
            data-rh="true"
            name="description" 
            content="Юрій Вахняк — психолог онлайн. Індивідуальні консультації: тривога, депресія, панічні атаки, ПТСР, життєві кризи. Професійна психологічна допомога." 
          />
          <meta 
            data-rh="true"
            name="keywords" 
            content="Юрій Вахняк, психолог, гештальт, консультації, онлайн психолог, тест на тривожність та депресію, тест ПТСР, HADS, PSL-5" 
          />
          <meta data-rh="true" name="author" content="Юрій Вахняк" />
          <link rel="canonical" href="https://psy-yv.com.ua/" />

          {/* Open Graph для соцмереж */}
          <meta property="og:title" content="Психолог онлайн — Юрій Вахняк" />
          <meta property="og:description" content="Професійна психологічна допомога онлайн: тривога, депресія, ПТСР." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://psy-yv.com.ua/" />
          <meta property="og:image" content="https://psy-yv.com.ua/logo512.png" />
        </Helmet>

        <Header />
        <Hero />
        
        <Reveal>
          <Box component="section" id="about-short">
            <AboutMeShort />
            <MoreButton/>
          </Box>
        </Reveal>
        
        <Box><AreasOfWork /></Box>      

        <Box component="section" id="how-to-start">
          <HowToStart short />
        </Box>

        {/* CTA */}
        <Box
          component="section"
          id="appointment"
          sx={{ textAlign: "center", py: 6 }}
        >
          <AppointmentButton />
        </Box>

        <Footer />
      </Container>
    </HelmetProvider>
  );
}

export default Home;

// import { Box,  Container } from "@mui/material";
// import Header from "../components/Header";
// import Hero from "../components/Hero"; 
// import Footer from "../components/Footer";
// import AboutMeShort from "../components/AboutMeShort";
// import HowToStart from "../components/HowToStart";
// import AppointmentButton from "../components/AppointmentButton";
// import AreasOfWork from "../components/AreasOfWork";
// import MoreButton from "../components/MoreButton";
// import Reveal from "../components/Reveal";



// function Home() {
//   return (
//     <Container
//       disableGutters
//       maxWidth={false}
//       sx={{ bgcolor: "#cfe8fc" }}
//     >
//       <Header />
//       <Hero />
     
  
//       <Reveal>
//         <Box component="section" id="about-short">
//           <AboutMeShort />
//           <MoreButton/>
//         </Box>
//       </Reveal>
      
//         <Box><AreasOfWork /></Box>     

          
//       <Box component="section" id="how-to-start">
//         <HowToStart short />
//       </Box>
    

//       {/* CTA */}
//       <Box
//         component="section"
//         id="appointment"
//         sx={{ textAlign: "center", py: 6 }}
//       >
//         <AppointmentButton />
//       </Box>

//       <Footer />
//     </Container>
//   );
// }

// export default Home;
