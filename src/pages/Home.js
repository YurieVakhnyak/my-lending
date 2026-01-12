import { Box,  Container } from "@mui/material";
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
