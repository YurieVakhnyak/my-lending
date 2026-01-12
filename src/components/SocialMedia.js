  
import { Box, IconButton } from "@mui/material";
import { Telegram, Facebook, Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { blue, pink, green } from "@mui/material/colors";
import Reveal from "./Reveal";
import "../App.css";

function SocialMedia() {
  return (
  
  <Box sx={{ display: "flex", gap: 2 }}>
  {[ 
    {
      icon: <WhatsAppIcon sx={{ fontSize: "2.5rem" }} />,
      href: "https://wa.me/380688964409",
      color: green,
      label: "WhatsApp",
    },
    {
      icon: <Telegram sx={{ fontSize: "2.5rem" }} />,
      href: "https://t.me/yurievakhnyak",
      color: blue,
      label: "Telegram",
    },
    {
      icon: <Facebook sx={{ fontSize: "2.5rem" }} />,
      href: "https://www.facebook.com/yurie.vakhnyak",
      color: blue,
      label: "Facebook",
    },
    {
      icon: <Instagram sx={{ fontSize: "2.5rem" }} />,
      href: "https://www.instagram.com/yurievakhnyak/",
      color: pink,
      label: "Instagram",
    },
  ].map((item, i) => (
    <Reveal key={item.label} delay={i * 80} fadeOnly>
      <IconButton
        component="a"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        sx={{
          color: item.color[300],
          transition: "all 0.3s ease", // Плавність для кольору і зміщення
              "&:hover": { 
                color: item.color[500],
                transform: "translateY(-2px)" 
                },
        }}
      >
        {item.icon}
      </IconButton>
    </Reveal>
  ))}
</Box>

   
  );
}
export default SocialMedia;