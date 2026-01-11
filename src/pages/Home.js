import { Box,  Container, Divider } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero"; 
import Footer from "../components/Footer";
import AboutMeShort from "../components/AboutMeShort";
import HowToStart from "../components/HowToStart";
import AppointmentButton from "../components/AppointmentButton";
import WhoIWorkWith from "../components/WhoIWorkWith";
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
        <Divider /> 
      {/* ABOUT SHORT */}
      <Reveal>
        <Box component="section" id="about-short">
          <AboutMeShort />
          <MoreButton/>
        </Box>
      </Reveal>
      <Divider />    
        <Box><WhoIWorkWith /></Box>     

      {/* HOW TO START */}
      <Reveal>
      <Box component="section" id="how-to-start">
        <HowToStart short />
      </Box>
      </Reveal>

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
