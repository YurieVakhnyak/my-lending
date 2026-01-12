import React from "react";
import { Typography, Box } from "@mui/material";
import Reveal from "./Reveal";

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
        gap: { xs: 2, sm: 5 }, 
        }}
      >
        {phoneLinks.map((phone, i) => (
          <Reveal key={phone.label} delay={i * 120} fadeOnly><Box
            key={phone.value}
            component="a"
            href={phone.value}
            sx={{
              textDecoration: "none",
              color: "inherit",
              whiteSpace: "nowrap",
              display: "inline-block", 
              transition: "all 0.3s ease", 
              "&:hover": { 
                color: "primary.main",
                transform: "translateY(-2px)" 
              },
            }}
          >
            {phone.label}
          </Box></Reveal>
        ))}
      </Typography>
    </Box>
  );
}

export default ContactPhones;