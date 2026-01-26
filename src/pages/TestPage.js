import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Додано
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import { testsData } from "./../data/TestsData";
import HADSTest from "../components/HADSTest";
import PCL5Test from "../components/PCL5Test";
import WarningMessage from "../components/WarningMessage";
import { transliterate } from "../utils/Transliterate";

const testComponents = {
  HADS: HADSTest,
  PCL5: PCL5Test,
};

function TestPage() {
  const { id } = useParams();
  const test = testsData.find((t) => transliterate(t.testTitle) === id);

  if (!test) {
    return (
      <Container sx={{ p: 2 }}>
        <Typography variant="h4">Тест не знайдено</Typography>
      </Container>
    );
  }

  const TestComponent = testComponents[test.component];

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
          <title>{test.testTitle} | Онлайн-тест | Юрій Вахняк</title>
          <meta 
            data-rh="true"
            name="description" 
            content={`${test.testTitle}: ${test.testDescription.substring(0, 150)}... Пройдіть тест онлайн та отримайте розшифровку результатів.`} 
          />
          <meta property="og:title" content={`${test.testTitle} — Психологічна самодіагностика`} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://psy-yv.com.ua/tests/${id}`} />
          <link rel="canonical" href={`https://psy-yv.com.ua/tests/${id}`} />
        </Helmet>

        <Header />

        <Container sx={{ p: 2, textAlign: "justify" }}>
          <WarningMessage />

          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            {test.testTitle}
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
            {test.testDescription}
          </Typography>

          {test.testLink && (
            <Link to={test.testLink} target="_blank">
              <Typography
                variant="body1"
                color="primary.main"
                sx={{ fontWeight: 600, mt: 2, textIndent: "2em" }}
              >
                PDF (оригінал)
              </Typography>
            </Link>
          )}

          <Typography
            variant="body1"
            sx={{ fontWeight: 600, mt: 2, textIndent: "2em" }}
          >
            Інструкція:
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
            {test.testInstruction}
          </Typography>
        </Container>

        <Box sx={{ pb: 4 }}>
          {TestComponent && <TestComponent />}
        </Box>

        <Footer />
      </Container>
    </HelmetProvider>
  );
}

export default TestPage;


// import * as React from "react";
// import { Link, useParams } from "react-router-dom";
// import Header from "../components/Header";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Footer from "../components/Footer";
// import { testsData } from "./../data/TestsData";
// import HADSTest from "../components/HADSTest";
// import PCL5Test from "../components/PCL5Test";
// import WarningMessage from "../components/WarningMessage";
// import { transliterate } from "../utils/Transliterate";

// // Мапа з тесту → на який компонент потрібно рендерити
// const testComponents = {
//   HADS: HADSTest,
//   PCL5: PCL5Test,
// };

// function TestPage() {
//   const { id } = useParams();
//   const test = testsData.find((t) => transliterate(t.testTitle) === id);

//   if (!test) {
//     return (
//       <Container sx={{ p: 2 }}>
//         <Typography variant="h4">Тест не знайдено</Typography>
//       </Container>
//     );
//   }

//   // Визначаємо компонент для тесту
//   const TestComponent = testComponents[test.component];

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

//       <Container sx={{ p: 2, textAlign: "justify" }}>
//         <WarningMessage />

//         <Typography variant="h4" sx={{ textAlign: "center" }}>
//           {test.testTitle}
//         </Typography>

//         <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
//           {test.testDescription}
//         </Typography>

//         {test.testLink && (
//           <Link to={test.testLink} target="_blank">
//             <Typography
//               variant="body1"
//               color="primary.main"
//               sx={{ fontWeight: 600, mt: 2, textIndent: "2em" }}
//             >
//               PDF (оригінал)
//             </Typography>
//           </Link>
//         )}

//         <Typography
//           variant="body1"
//           sx={{ fontWeight: 600, mt: 2, textIndent: "2em" }}
//         >
//           Інструкція:
//         </Typography>

//         <Typography variant="body1" sx={{ mt: 2, textIndent: "2em" }}>
//           {test.testInstruction}
//         </Typography>
//       </Container>

//       <Box>{TestComponent && <TestComponent />}</Box>

//       <Footer />
//     </Container>
//   );
// }

// export default TestPage;

