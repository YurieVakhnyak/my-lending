import { Box, Typography } from "@mui/material";
import { HomeQuoteOne } from "../data/TextConstants";

function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: "100vh",
        bgcolor: "#afe8fc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
          color: "#42a5f5",
          mb: 2,
          lineHeight: 1.2,
        }}
      >
        Почни зміни з{" "}
        <Box
          component="span"
          sx={{ color: "#1976d2", fontWeight: "bold" }}
        >
          прийняття
        </Box>{" "}
        себе
      </Typography>

      <Typography
        sx={{
          fontFamily: "Lobster, cursive",
          color: "#1976d2",
          maxWidth: 700,
          fontSize: { xs: "1.1rem", sm: "1.3rem" },
          mt: 1,
        }}
      >
        {HomeQuoteOne}
      </Typography>
    </Box>
  );
}

export default Hero;