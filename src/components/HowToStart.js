import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PaymentIcon from "@mui/icons-material/Payment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Reveal from "./Reveal";

const steps = [
  {
    icon: <ChatIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Перший крок",
    text: "Ви пишете мені у соцмережі або телефонуєте. Ми обговорюємо ваш запит та домовляємося про зустріч.",
  },
  {
    icon: <VideoChatIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Знайомство (0\u00A0грн)",
    text: "Безкоштовна зустріч (до\u00A015\u00A0хв) для знайомства і визначення, чи можу я бути вам корисним.",
  },
  {
    icon: <EventAvailableIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Повна сесія",
    text: "Якщо ви готові працювати одразу – проводимо повну консультацію (перша – 60\u201170\u00A0хв, далі – 50\u00A0хв).",
  },
  {
    icon: <PaymentIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Оплата після",
    text: "Оплата за першу консультацію – ПІСЛЯ зустрічі. Далі – за домовленістю.",
  },
];

function HowToStart() {
  return (
    <Box sx={{ py: 3, px: 2, maxWidth: 1100, margin: "0 auto" }}>
     <Reveal>
  <Typography
    variant="h4"
    gutterBottom
    sx={{ 
      textAlign: "center", 
      mb: 4, 
      fontWeight: "bold", 
      color: "text.secondary",
      fontSize: { xs: "1.5rem", md: "2rem" } 
    }}
  >
    Як почати роботу?
  </Typography>


      
      <Grid 
        container 
        spacing={3} 
        rowSpacing={{ xs: 4, md: 3 }} 
      >
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
    
            <Paper
              elevation={2}
              sx={{
                p: 2.5, 
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 4,
                bgcolor: "rgba(152, 219, 250, 0.8)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              
                minHeight: { xs: "auto", md: "180px" }, 
              }}
            >
              <Reveal delay={index * 100} fadeOnly>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ mb: 1.5 }}>{step.icon}</Box>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          {step.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {step.text}
        </Typography>
      </Box>
    </Reveal>
            </Paper>
          </Grid>
        ))}
      </Grid></Reveal>
    </Box>
  );
}

export default HowToStart;

