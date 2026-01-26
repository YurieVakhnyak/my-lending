import * as React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Додано
import { Box, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowToStart from "../components/HowToStart";
import SocialMedia from "../components/SocialMedia";
import ContactPhones from "../components/ContactPhones";
import "../App.css";

function Appointmnent() {
  return (
    <HelmetProvider>
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
        <Helmet>
          <title>Запис на консультацію | Психолог Юрій Вахняк</title>
          <meta 
            data-rh="true"
            name="description" 
            content="Запишіться на онлайн-консультацію до психолога Юрія Вахняка. Вартість: 1000 грн за 50 хв. Контакти, графік роботи та месенджери для зв'язку." 
          />
          <meta data-rh="true" property="og:title" content="Записатися до психолога онлайн | Юрій Вахняк" />
          <meta property="og:url" content="https://psy-yv.com.ua/appointment" />
          <link rel="canonical" href="https://psy-yv.com.ua/appointment" />
        </Helmet>

        <Header />

        <Box p={3} sx={{ bgcolor: "#cfe8fc", flexGrow: 1 }}>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h5" color="text.secondary" sx={{ mt: 4 }}>
              Для запису на онлайн-консультацію або запитань пишіть:
            </Typography>

            <SocialMedia />
            <ContactPhones />
            <HowToStart />

            {/* Блок вартості */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: "bold" }}>
                Вартість консультації:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                1000 грн за зустріч{" "}
                <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                  (50 хв)
                </Box>
              </Typography>
            </Box>

            {/* Блок часу роботи */}
            <Box sx={{ mt: 2, mb: 4 }}>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: "bold", mb: 1 }}>
                Часи роботи:
              </Typography>
              
              <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                gap: 0.5 
              }}>
                <Typography variant="h5" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                  понеділок - субота
                </Typography>
                
                <Typography variant="h5" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                  9:00 - 19:00
                </Typography>
                
                <Typography variant="h6" color="text.secondary" sx={{ fontSize: "1.1rem", opacity: 0.8 }}>
                  (інше - за домовленістю)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Footer />
      </Container>
    </HelmetProvider>
  );
}

export default Appointmnent;


// import * as React from "react";
// import { Box, Container, Typography } from "@mui/material";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import HowToStart from "../components/HowToStart";
// import SocialMedia from "../components/SocialMedia";
// import ContactPhones from "../components/ContactPhones";
// import "../App.css";

// function Appointmnent() {
//   return (
//     <Container
//       disableGutters
//       maxWidth={false}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//         bgcolor: "#cfe8fc",
//       }}
//     >
//       <Header />

//       <Box p={3} sx={{ bgcolor: "#cfe8fc", flexGrow: 1 }}>
//         <Box
//           p={2}
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           gap={2}
//           sx={{ textAlign: "center" }}
//         >
//           <Typography variant="h5" color="text.secondary" sx={{ mt: 4 }}>
//             Для запису на онлайн-консультацію або запитань пишіть:
//           </Typography>

//           <SocialMedia />

//           <ContactPhones />
    
//           <HowToStart />

//           {/* Блок вартості */}
//           <Box sx={{ mt: 2 }}>
//             <Typography variant="h6" color="text.secondary" sx={{ fontWeight: "bold" }}>
//               Вартість консультації:
//             </Typography>
//             <Typography variant="h5" color="text.secondary">
//               1000 грн за зустріч{" "}
//               {/* whiteSpace: "nowrap" гарантує, що (50 хв) не розірветься */}
//               <Box component="span" sx={{ whiteSpace: "nowrap" }}>
//                 (50 хв)
//               </Box>
//             </Typography>
//           </Box>

//           {/* Блок часу роботи */}
//           <Box sx={{ mt: 2, mb: 4 }}>
//             <Typography variant="h6" color="text.secondary" sx={{ fontWeight: "bold", mb: 1 }}>
//               Часи роботи:
//             </Typography>
            
//             <Box sx={{ 
//               display: "flex", 
//               flexDirection: "column", 
//               alignItems: "center",
//               gap: 0.5 // невеликий відступ між рядками
//             }}>
//               <Typography variant="h5" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
//                 понеділок - субота
//               </Typography>
              
//               <Typography variant="h5" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
//                 9:00 - 19:00
//               </Typography>
              
//               <Typography variant="h6" color="text.secondary" sx={{ fontSize: "1.1rem", opacity: 0.8 }}>
//                 (інше - за домовленістю)
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       <Footer />
//     </Container>
//   );
// }

// export default Appointmnent;