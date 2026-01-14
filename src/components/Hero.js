import { Box, Typography,  Grid } from "@mui/material";
import { HomeQuoteOne } from "../data/TextConstants";

import MyPhoto from "../components/images/photo_yurie_vakhnyak_mid.jpg";

function Hero() {


  return (
<Box
      component="section"
      id="hero"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to top, #90caf9 0%, #e3f2fd 60%, #faffff 100%)",
        display: "flex",
        alignItems: "center",
        // Змінюємо відступи: зверху менше (4 замість 8), додаємо знизу (6)
        px: { xs: 2, md: 8 },
        pt: { xs: 6, md: 0 }, 
        pb: { xs: 8, md: 0 }, 
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        justifyContent="center"
        // Додаємо невеликий margin-bottom для сітки на мобайлі
        sx={{ mb: { xs: 4, md: 0 } }}
      >
        
        {/* ТЕКСТОВИЙ БЛОК */}
        <Grid 
          item 
          xs={12} 
          md={7} 
          // На мобайлі текст буде першим (order 1 або 2 за бажанням)
          sx={{ textAlign: { xs: "center", md: "left" }, order: { xs: 2, md: 1 } }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
              color: "#1976d2",
              fontWeight: 800,
              mb: 1,
              animation: "fadeIn 1s ease-in",
            }}
          >
            Онлайн-психолог{" "}
            <Box component="span" sx={{ whiteSpace: "nowrap" }}>
              Юрій Вахняк
            </Box>
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" },
              color: "#42a5f5",
              mb: 3,
              lineHeight: 1.3,
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
              maxWidth: 600,      
              mx: { xs: "auto", md: 0 }, 
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              mb: 4,
              fontStyle: "italic",
            }}
          >
            {HomeQuoteOne}
          </Typography>
        </Grid>

        {/* БЛОК ДЛЯ ФОТО */}
        <Grid 
          item 
          xs={12} 
          md={5} 
          sx={{ 
            display: "flex", 
            justifyContent: "center",
            order: { xs: 1, md: 2 }, // Фото може бути зверху на мобайлі (xs: 1)
            mt: { xs: 2, md: 0 }   // Невеликий відступ зверху, щоб не "тисло" на заголовок
          }}
        >
          <Box
            component="img"
            src={MyPhoto}
            alt="Юрій Вахняк"
            sx={{
              width: "100%",
              maxWidth: { xs: 300, sm: 350, md: 400 }, // Трохи зменшили фото на мобайлі
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}
          />
        </Grid> 

      </Grid>

      {/* CSS Анімація */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default Hero;

// import { Box, Typography } from "@mui/material";
// import { HomeQuoteOne } from "../data/TextConstants";

// function Hero() {
//   return (
//     <Box
//       component="section"
//       id="hero"
//       sx={{
//         minHeight: "100vh",
//         bgcolor: "#afe8fc",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         px: 2,
//       }}
//     >
//      <Typography  variant="h3"
//   component="h1"
//   sx={{
//     fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
//     color: "#1976d2",
//     fontWeight: 700,
//     mb: 1,
//   }}>
//   Онлайн-психолог{" "}
//   <Box component="span" sx={{ whiteSpace: "nowrap" }}>
//     Юрій Вахняк
//   </Box>
// </Typography>


// <Typography
//   variant="h4"
//   component="h2"
//   sx={{
//     fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
//     color: "#42a5f5",
//     mb: 2,
//     lineHeight: 1.2,
//   }}
// >
//   Почни зміни з{" "}
//   <Box component="span" sx={{ fontWeight: "bold", color: "#1976d2" }}>
//     прийняття
//   </Box>{" "}
//   себе
// </Typography>


//       <Typography
//         sx={{
//           fontFamily: "Lobster, cursive",
//           color: "#1976d2",
//           maxWidth: 700,
//           fontSize: { xs: "1.1rem", sm: "1.3rem" },
//           mt: 1,
//         }}
//       >
//         {HomeQuoteOne}
//       </Typography>
//     </Box>
//   );
// }

// export default Hero;