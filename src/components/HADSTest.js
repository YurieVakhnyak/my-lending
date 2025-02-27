import { useState, useEffect } from "react";
import { Container, Box, Button } from "@mui/material";
import HADSQuestion from "./HADSQuestion";
import { HADSData } from "../data/HADSData";

const HADSTest = () => {
  const [answers, setAnswers] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    // Перевіряємо, чи всі 14 питань з типом 'radio' мають відповіді
    const allAnswered = HADSData.length === Object.keys(answers).length;

    setIsFormComplete(allAnswered);
  }, [answers]);

  const handleSubmit = () => {
    const anxietyScore = HADSData.filter((q) => q.category === "A").reduce(
      (sum, q) => sum + (answers[q.id] || 0),
      0
    );
    const depressionScore = HADSData.filter((q) => q.category === "D").reduce(
      (sum, q) => sum + (answers[q.id] || 0),
      0
    );
    alert(`Ваші результати:

    Тривожність: ${anxietyScore},   Депресія: ${depressionScore}
  
    0-7 - норма;
    8-10 - межові значення (межовий випадок);
    11-21 - відсутність норми.`);
  };

  return (
    <Container sx={{ p: 2 }}>
      {HADSData.map((q) => (
        <HADSQuestion key={q.id} question={q} onAnswer={handleAnswer} />
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" }, // По центру на малих, зліва на великих
          mt: 2,
          mb: 2,
          pl: { sm: 3 }, // Додає відступ ліворуч тільки на великих екранах
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!isFormComplete}
        >
          Отримати результати
        </Button>
      </Box>
    </Container>
  );
};

export default HADSTest;

// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import HADSQuestion from "./HADSQuestion";
// import { HADSData } from "../data/HADSData";

// const HADSTest = () => {
//   const [answers, setAnswers] = useState({});

//   const handleAnswer = (id, value) => {
//     setAnswers((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = () => {
//     const anxietyScore = HADSData.filter((q) => q.category === "A").reduce(
//       (sum, q) => sum + (answers[q.id] || 0),
//       0
//     );
//     const depressionScore = HADSData.filter((q) => q.category === "D").reduce(
//       (sum, q) => sum + (answers[q.id] || 0),
//       0
//     );
//     alert(`Ваші результати:

//     Тривожність: ${anxietyScore},   Депресія: ${depressionScore}

//     0-7 - норма;
//     8-10 - межові значення (межовий випадок);
//     11-21 - відсутність норми.`);
//   };

//   return (
//     <Box
//       sx={{
//         p: 3,
//       }}
//     >
//       {HADSData.map((q) => (
//         <HADSQuestion key={q.id} question={q} onAnswer={handleAnswer} />
//       ))}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSubmit}
//         // fullWidth
//       >
//         Отримати результати
//       </Button>
//     </Box>
//   );
// };

// export default HADSTest;
