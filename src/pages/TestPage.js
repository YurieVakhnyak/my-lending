import * as React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import { testsData } from "./../data/TestsData";
import HADSTest from "../components/HADSTest";
import WarningMessage from "../components/WarningMessage";
import { transliterate } from "../utils/Transliterate";

function TestPage() {
  const { id } = useParams();
  const test = testsData.find((t) => transliterate(t.testTitle) === id); // Отримуємо тест за id

  if (!test) {
    return (
      <Container sx={{ p: 2 }}>
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
      <Container sx={{ p: 2, textAlign: "justify" }}>
        <WarningMessage />
        <Typography variant="h4" color="inherit" sx={{ textAlign: "center" }}>
          {test.testTitle}
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
          {test.testDescription}
        </Typography>
        <Link
          to={
            "https://www.svri.org/sites/default/files/attachments/2016-01-13/HADS.pdf"
          }
        >
          {" "}
          <Typography
            variant="body1"
            color="primary.main"
            sx={{
              fontWeight: 600,
              mt: 2,
              textIndent: "2em",
            }}
          >
            HADS (pdf)
          </Typography>
        </Link>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, mt: 2, textIndent: "2em" }}
        >
          Інструкція:
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
          {test.testInstruction}
        </Typography>
      </Container>
      <Box>
        <HADSTest />
      </Box>
      <Footer />
    </Container>
  );
}

export default TestPage;
