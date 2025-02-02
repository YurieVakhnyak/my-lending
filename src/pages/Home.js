import * as React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { HomeQuoteTwo } from "../data/TextConstants";
import AboutMeShort from "../components/AboutMeShort";
import AppointmentButton from "../components/AppointmentButton";
import Footer from "../components/Footer";

function Home() {
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
      <Box>
        <Box
          sx={{
            bgcolor: "#afe8fc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "30rem",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                margin: 3,
                color: "#42a5f5",
              }}
            >
              Почни зміни з{" "}
              <Box
                component="span"
                sx={{ color: "#1976d2", fontSize: "1.2em", fontWeight: "bold" }}
              >
                прийняття
              </Box>{" "}
              себе
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontFamily: "Lobster",
                color: "#1976d2",
                p: 1,
              }}
            >
              {HomeQuoteTwo}
            </Typography>
          </Box>
        </Box>
      </Box>
      <AboutMeShort />
      <AppointmentButton />
      <Footer />
    </Container>
  );
}

export default Home;
