import { useState, useEffect } from "react";
import { Container, Box, Button } from "@mui/material";
import PCL5Question from "./PCL5Question";
import { PCL5Data } from "../data/PCL5Data";

const PCL5Test = () => {
  const [answers, setAnswers] = useState({});
  const [missingCount, setMissingCount] = useState(0);
  const [isAllowedToSubmit, setIsAllowedToSubmit] = useState(true);

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    const answered = Object.keys(answers).length;
    const total = PCL5Data.length;
    const missing = total - answered;

    setMissingCount(missing);
    setIsAllowedToSubmit(missing <= 0);
  }, [answers]);

  const handleSubmit = () => {
    // Рахуємо лише відповіді
    const totalScore = PCL5Data.reduce(
      (sum, q) => sum + (answers[q.id] ?? 0),
      0
    );

    let interpretation = "";

    if (totalScore < 20) interpretation = "Мінімальні прояви симптомів ПТСР.";
    else if (totalScore < 33)
      interpretation = `Легкі–помірні прояви стресової реакції (помірна вираженість симптомів ПТСР, недостатня для постанови діагнозу). \nПри кількості балів 33 і більше — ймовірні виражені прояви постравматичного розладу.`;
    else
      interpretation = `При кількості балів 33 і більше — ймовірні виражені прояви постравматичного розладу. Рекомендовано додатковке клінічне інтерв'ю зі спеціалістом.`;

    const missingText =
      missingCount > 0 ? `\nВи пропустили: ${missingCount} питання.` : "";

    alert(`Ваш результат: ${totalScore}
${interpretation}
Максимально можливий бал: 80.
${missingText}`);
  };

  return (
    <Container sx={{ p: 2 }}>
      {PCL5Data.map((q) => (
        <PCL5Question key={q.id} question={q} onAnswer={handleAnswer} />
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          mt: 2,
          mb: 2,
          pl: { sm: 3 },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!isAllowedToSubmit}
        >
          Отримати результати
        </Button>
      </Box>

      {!isAllowedToSubmit && (
        <Box sx={{ color: "red", pl: { sm: 3 }, mb: 2 }}>
          Ви не відповіли на всі питання. Будь ласка, заповніть тест повністю,
          щоб отримати результати.
        </Box>
      )}
    </Container>
  );
};

export default PCL5Test;
