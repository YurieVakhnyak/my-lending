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
     <Typography  variant="h3"
  component="h1"
  sx={{
    fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
    color: "#1976d2",
    fontWeight: 700,
    mb: 1,
  }}>
  Онлайн-психолог{" "}
  <Box component="span" sx={{ whiteSpace: "nowrap" }}>
    Юрій Вахняк
  </Box>
</Typography>


<Typography
  variant="h4"
  component="h2"
  sx={{
    fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
    color: "#42a5f5",
    mb: 2,
    lineHeight: 1.2,
  }}
>
  Почни зміни з{" "}
  <Box component="span" sx={{ fontWeight: "bold", color: "#1976d2" }}>
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