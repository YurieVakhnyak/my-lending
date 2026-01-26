import * as React from "react";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Додано
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import CardTest from "../components/CardTest";
import { testsData } from "../data/TestsData";
import WarningMessage from "../components/WarningMessage";
import { transliterate } from "../utils/Transliterate";

function Tests() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    setTests(testsData);
  }, []);

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
          <title>Психологічні тести онлайн | Юрій Вахняк</title>
          <meta 
            data-rh="true"
            name="description" 
            content="Пройдіть професійні психологічні тести онлайн: шкала тривоги та депресії (HADS), тест на ПТСР та інші. Отримайте миттєвий результат та рекомендації психолога." 
          />
          <meta data-rh="true" property="og:title" content="Психологічні тести онлайн | Юрій Вахняк" />
          <meta data-rh="true" property="og:description" content="Безкоштовні клінічні тести для самодіагностики ментального стану." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://psy-yv.com.ua/tests" />
          <link rel="canonical" href="https://psy-yv.com.ua/tests" />
        </Helmet>

        <Header />
        <Box sx={{ p: 2 }}>
          <WarningMessage />
        </Box>
        
        <Box 
          sx={{ 
            display: "flex", 
            flexWrap: "wrap",   
            justifyContent: "center", 
            gap: 3,                   
            mx: "auto",  
            pb: 4 // Додав трохи відступу знизу
          }}
        >
          {tests.length > 0 ? (
            tests.map((test, index) => (
              <CardTest
                key={index + "test"}
                testTitle={test.testTitle}
                testDescription={test.testDescription}
                testLink={`/tests/${transliterate(test.testTitle)}`}
              />
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", width: "100%", mt: 3 }}
            >
              Завантаження триває...
            </Typography>
          )}
        </Box>

        <Footer />
      </Container>
    </HelmetProvider>
  );
}

export default Tests;

// import * as React from "react";
// import { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Footer from "../components/Footer";
// import CardTest from "../components/CardTest";
// import { testsData } from "../data/TestsData";
// import WarningMessage from "../components/WarningMessage";
// import { transliterate } from "../utils/Transliterate";

// function Tests() {
//   const [tests, setTests] = useState([]);

//   useEffect(() => {
//     setTests(testsData);
//     console.log("Завантажені тести:", testsData);
//   }, []);

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
//       <Box sx={{ p: 2 }}>
//         <WarningMessage />
//       </Box>
//      <Box 
//   sx={{ 
//     display: "flex", 
//     flexWrap: "wrap",   
//     // alignItems: "stretch",
//     justifyContent: "center", // Центрує блоки по горизонталі
//     gap: 3,                   // Створює однакову відстань (24px) між картками
//        mx: "auto",  
//                 // Центрує сам контейнер
    
//   }}
// >
//         {tests.length > 0 ? (
//           tests.map((test, index) => (
//             <CardTest
//               key={index + "test"}
//               testTitle={test.testTitle}
//               testDescription={test.testDescription}
//               testLink={`/tests/${transliterate(test.testTitle)}`}
//             />
//           ))
//         ) : (
//           <Typography
//             variant="h6"
//             sx={{ textAlign: "center", width: "100%", mt: 3 }}
//           >
//             Завантаження триває...
//           </Typography>
//         )}
//       </Box>

//       <Footer />
//     </Container>
//   );
// }

// export default Tests;
