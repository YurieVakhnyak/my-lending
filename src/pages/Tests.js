import * as React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import CardTest from "../components/CardTest";
import { testsData } from "../data/TestsData";

function Tests() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    setTests(testsData);
    console.log("Завантажені тести:", testsData);
  }, []);

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
      <Box sx={{ p: 2 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textIndent: "2em" }}
        >
          Усі тести та скринінги представлені з ознайомчою метою для того щоб
          зорієнтуватися у вашому стані. Не варто ставити собі діагнози на їх
          основі.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {tests.length > 0 ? (
          tests.map((test, index) => (
            <CardTest
              key={index + "test"}
              testTitle={test.testTitle}
              testDescription={test.testDescription}
              testLink={`/tests/${index}`}
            />
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", width: "100%", mt: 3 }}
          >
            Даних немає 😔
          </Typography>
        )}
      </Box>

      <Footer />
    </Container>
  );
}

export default Tests;
