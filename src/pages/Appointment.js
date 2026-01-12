import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowToStart from "../components/HowToStart"; // Імпортуємо новий компонент
import SocialMedia from "../components/SocialMedia";
import ContactPhones from "../components/ContactPhones";
import "../App.css";

function Appointmnent() {
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

      <Box p={3} sx={{ bgcolor: "#cfe8fc", flexGrow: 1 }}>
        
             

        <Box
          p={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ textAlign: "center" }}
        >
          <Typography variant="h5" color="text.secondary" sx={{ mt: 4 }}>
            Для запису на онлайн-консультацію або запитань пишіть:
          </Typography>

          {/* Соціальні мережі */}
          <SocialMedia />
          <ContactPhones />
    
          {/* <Typography variant="h6" color="text.secondary">
            або телефонуйте:
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: "bold" }}
          >
            <a href="tel:0663930429" style={{ textDecoration: "none", color: "inherit" }}>
              066-393-04-29
            </a>
            {", "}
            <a href="tel:0688964409" style={{ textDecoration: "none", color: "inherit" }}>
              068-896-44-09
            </a>
          </Typography> */}

            <HowToStart />

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: "bold" }}>
              Вартість консультації:
            </Typography>
            <Typography variant="h5" color="text.secondary">
              1000 грн за зустріч (50 хв)
            </Typography>
          </Box>
        

          <Box sx={{ mt: 2, mb: 4 }}>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: "bold" }}>
              Часи роботи:
            </Typography>
            <Typography variant="h5" color="text.secondary">
              понеділок - субота, 9:00 - 19:00
              (інше - за домовленістю)
            </Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

export default Appointmnent;
