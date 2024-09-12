import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Header from "../components/Header";
import "../App.css";
// import myphoto from "../components/images/mainphoto-mid.jpg";
import { AboutBio } from "../data/TextConstants";
import Footer from "../components/Footer";
import ProgressiveImageCard from "../components/ProgressiveImageCard";
import YouTubeVideo from "../components/YouTubeVideo";

function About() {
  return (
    <Container disableGutters maxWidth={false}>
      <Header />
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          // height: "85vh",
        }}
      >
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            // bgcolor: "white",

            p: 2,
            // height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
          }}
        >
          <Box
            // my={4}
            display="flex"
            alignItems="start"
            justifyContent="center"
            gap={4}
            sx={{
              width: 700,
            }}
          >
            <Typography variant="body1" color="text.secondary"></Typography>
            {AboutBio}
            {/* <Button size="small">Подробиці</Button> */}
          </Box>
          <ProgressiveImageCard />

          {/* <Card sx={{ width: 300, m: 2 }}>
            <CardMedia sx={{ height: 300 }} image={myphoto} title="yurie" />
          </Card> */}
        </Box>
        <Box
          p={2}
          sx={
            {
              // bgcolor: "cyan",
            }
          }
        >
          <Typography variant="h5" align="center">
            Дипломи та сертифікати
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {AboutMyProfession}
          </Typography> */}
        </Box>
        <Box></Box>
        <YouTubeVideo />
      </Box>
      <Footer />
    </Container>
  );
}

export default About;
