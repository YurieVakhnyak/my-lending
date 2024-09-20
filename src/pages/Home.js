import * as React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {
  HomeQuoteOne,
  HomeQuoteThree,
  HomeQuoteTwo,
} from "../data/TextConstants";
import AboutMeShort from "../components/AboutMeShort";
import AppointmentButton from "../components/AppointmentButton";
import Footer from "../components/Footer";

function Home() {
  return (
    <Container disableGutters maxWidth={false}>
      <Header />
      <Box
      // sx={{
      //   bgcolor: "#cfe8fc",
      //   height: "80vh",
      // }}
      >
        <Box
          sx={{
            bgcolor: "#afe8fc",
            // height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              // bgcolor: "#d7e360",
              display: "flex",
              width: 500,

              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: "center",
                margin: 3,
                color: "#42a5f5",
              }}
            >
              Почни свій шлях до{" "}
              <Box component="span" sx={{ color: "#1976d2" }}>
                ЩАСТЯ
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              width: "40hv",
              height: "40hv",
            }}
          >
            <Paper sx={{ p: 1, ml: 1, mt: 5 }} color="secondary" elevation={5}>
              <Typography variant="body2" color="text.secondary">
                {HomeQuoteOne}
              </Typography>
            </Paper>
            <Paper sx={{ p: 1, ml: 1, mt: 1 }} elevation={2}>
              <Typography variant="body2" color="text.secondary">
                {HomeQuoteTwo}
              </Typography>
            </Paper>
            <Paper sx={{ p: 1, ml: 1, mt: 1 }} elevation={2}>
              <Typography variant="body2" color="text.secondary">
                {HomeQuoteThree}
              </Typography>
            </Paper>
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
