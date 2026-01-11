import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PaymentIcon from "@mui/icons-material/Payment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const steps = [
  {
    icon: <ChatIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Перший крок",
    text: "Ви пишете мені у соцмережі або телефонуєте. Ми обговорюємо ваш запит та домовляємося про зустріч.",
  },
  {
    icon: <VideoChatIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Знайомство (0 грн)",
    text: "Безкоштовна зустріч (до 15 хв) для знайомства і визначення, чи можу я бути вам корисним.",
  },
  {
    icon: <EventAvailableIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Повна сесія",
    text: "Якщо ви готові працювати одразу — проводимо повну консультацію (перша — 60-70 хв, далі — 50 хв).",
  },
  {
    icon: <PaymentIcon color="primary" sx={{ fontSize: 35 }} />,
    title: "Оплата після",
    text: "Оплата за першу консультацію — ПІСЛЯ зустрічі. Далі — за домовленістю.",
  },
];

function HowToStart() {
  return (
    <Box sx={{ py: 3, px: 2, maxWidth: 1100, margin: "0 auto" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ 
          textAlign: "center", 
          mb: 4, 
          fontWeight: "bold", 
          color: "text.secondary",
          fontSize: { xs: "1.5rem", md: "2rem" } // трохи менший шрифт для мобільних
        }}
      >
        Як почати роботу?
      </Typography>
      
      <Grid 
        container 
        spacing={3} 
        rowSpacing={{ xs: 4, md: 3 }} // Більший відступ між картками на мобілці
      >
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
            <Paper
              elevation={2}
              sx={{
                p: 2.5, // Зменшено відступ (було 3)
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 4,
                bgcolor: "rgba(152, 219, 250, 0.8)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
                // Мінімальна висота тільки для десктопа, щоб були рівні
                // На мобілці (xs) висота буде підлаштовуватися під контент
                minHeight: { xs: "auto", md: "180px" }, 
              }}
            >
              <Box sx={{ mb: 1.5 }}>{step.icon}</Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", fontSize: "1.1rem" }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                {step.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HowToStart;


// import * as React from "react";
// import { Box, Paper, Typography, Button } from "@mui/material";
// import { Phone, Chat } from "@mui/icons-material";

// export default function HowToStart() {
//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         width: "100%",
//         maxWidth: 900,
//         mx: "auto",
//         p: { xs: 2, sm: 3 },
//         mb: 3,
//         bgcolor: "background.paper",
//       }}
//       aria-labelledby="how-to-start-title"
//     >
//       <Box display="flex" flexDirection="column" gap={1.5}>
//         <Typography
//           id="how-to-start-title"
//           variant="h5"
//           component="h2"
//           color="text.primary"
//         >
//           Як почати?
//         </Typography>

//         <Typography variant="body1" color="text.secondary">
//           1. Зв'язуємося будь‑яким зручним способом — у соцмережі або по телефону.
//         </Typography>

//         <Typography variant="body1" color="text.secondary">
//           2. Домовляємось на першу коротку зустріч — передконсультацію (5–15 хвилин).
//           Під час неї визначаємо, чи зможу бути вам корисним. Ця коротка розмова — безкоштовна.
//         </Typography>

//         <Typography variant="body1" color="text.secondary">
//           3. Якщо ви згодні працювати далі — проводимо повну консультацію (1 година).
//           Оплата здійснюється ПІСЛЯ першої консультації.
//         </Typography>

//         <Typography variant="body1" color="text.secondary">
//           4. Далі домовляємось про формат і графік, що підходить саме вам.
//         </Typography>

//         <Box mt={1} display="flex" gap={1} flexWrap="wrap">
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<Phone />}
//             href="tel:0663930429"
//           >
//             Телефонувати
//           </Button>

//           <Button
//             variant="outlined"
//             color="primary"
//             startIcon={<Chat />}
//             href="https://t.me/yurievakhnyak"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Написати в Telegram
//           </Button>
//         </Box>
//       </Box>
//     </Paper>
//   );
// }