import React from "react";
import { Helmet } from "react-helmet-async";
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
  
      <Container
        disableGutters
        maxWidth={false}
        sx={{ bgcolor: "#cfe8fc" }}
      >
     <Helmet>
  <title>Психолог онлайн — Юрій Вахняк</title>

  <meta
    name="description"
    content="Юрій Вахняк — психолог онлайн. Індивідуальні консультації: тривога, депресія, ПТСР."
  />

  <link rel="canonical" href="https://psy-yv.com.ua/" />

  <meta property="og:title" content="Психолог онлайн — Юрій Вахняк" />
  <meta property="og:description" content="Професійна психологічна допомога онлайн" />
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
