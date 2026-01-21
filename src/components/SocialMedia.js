  
import { Box, IconButton, Tooltip } from "@mui/material";
import { Telegram, Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessengerIcon from "./MessengerIcon";
import ViberIcon from "./ViberIcon";
import { blue, pink, green, purple, lightBlue  } from "@mui/material/colors";
import Reveal from "./Reveal";
import "../App.css";

function SocialMedia() {
  return (
    <Box sx={{ display: "flex", gap: 2, 
    
    "@media (max-width:600px)": {
      gap: 1,
    },
   
    "@media (max-width:350px)": {
      gap: 0.5, // 4px
    } }}>
      {[
        {
          icon: <WhatsAppIcon sx={{ fontSize: "2.5rem" }} />,
          href: "https://wa.me/380688964409",
          color: green,
          label: "Написати у WhatsApp",
        },
        {
          icon: <Telegram sx={{ fontSize: "2.5rem" }} />,
          href: "https://t.me/yurievakhnyak",
          color: blue,
          label: "Написати уTelegram",
        },
          {
          icon: <ViberIcon sx={{ fontSize: "2.5rem" }} />,
       // Для SocialMedia.js
       href: "viber://chat?number=%2B380663930429",
    
       color: purple,
          label: "Написати у Viber",
        },
        {
          icon: <MessengerIcon />,
          href: "https://m.me/yurie.vakhnyak",
          color: lightBlue,
          label: "Написати у Messenger",
        },      
        {
          icon: <Instagram sx={{ fontSize: "2.5rem" }} />,
          href: "https://www.instagram.com/yurievakhnyak/",
          color: pink,
          label: "Написати в Instagram",
        },
      ].map((item, i) => (
        <Reveal key={item.label} delay={i * 80} fadeOnly>
          <Tooltip title={item.label} arrow><IconButton
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            sx={{
              color: item.color[400],
              transition: "all 0.3s ease",
              "&:hover": {
                color: item.color[600],
                transform: "translateY(-2px)",
              },
            }}
          >
            {item.icon}
          </IconButton></Tooltip>
        </Reveal>
      ))}
    </Box>
  );
}

export default SocialMedia;

