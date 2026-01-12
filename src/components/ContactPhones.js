import React from "react";
import { Typography, Box } from "@mui/material";

function ContactPhones() {
  const phoneLinks = [
    { label: "066-393-04-29", value: "tel:0663930429" },
    { label: "068-896-44-09", value: "tel:0688964409" },
  ];

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
        або телефонуйте:
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          fontWeight: "bold",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          // xs: 2 — трохи більше ніж було для мобілок
          // sm: 5 — значно більше для десктопа (коли в один рядок)
          gap: { xs: 2, sm: 5 }, 
        }}
      >
        {phoneLinks.map((phone) => (
          <Box
            key={phone.value}
            component="a"
            href={phone.value}
            sx={{
              textDecoration: "none",
              color: "inherit",
              whiteSpace: "nowrap",
              display: "inline-block", // Потрібно для коректної анімації зміщення
              transition: "all 0.3s ease", // Плавність для кольору і зміщення
              "&:hover": { 
                color: "primary.main",
                transform: "translateY(-2px)" // Легке зміщення вгору
              },
            }}
          >
            {phone.label}
          </Box>
        ))}
      </Typography>
    </Box>
  );
}

export default ContactPhones;