import * as React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import { testsData } from "./../data/TestsData"; // Імпортуємо дані
import HADSTest from "../components/HADSTest";

function TestPage() {
  const { id } = useParams();
  const test = testsData[id]; // Отримуємо тест за id

  if (!test) {
    return (
      <Container>
        <Typography variant="h4">Тест не знайдено</Typography>
      </Container>
    );
  }

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
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {test.testTitle}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
          {test.testDescription}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
          {test.testInstruction}
        </Typography>
      </Box>
      <Box>
        <HADSTest />
      </Box>
      <Footer />
    </Container>
  );
}

export default TestPage;
