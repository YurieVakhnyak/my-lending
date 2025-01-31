import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import HADSQuestion from "./HADSQuestion";
import { HADSData } from "./HADSData";

const HADSTest = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const anxietyScore = HADSData.filter((q) => q.category === "A").reduce(
      (sum, q) => sum + (answers[q.id] || 0),
      0
    );
    const depressionScore = HADSData.filter((q) => q.category === "D").reduce(
      (sum, q) => sum + (answers[q.id] || 0),
      0
    );
    alert(`Тривожність: ${anxietyScore}, Депресія: ${depressionScore}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Тест HADS
      </Typography>
      {HADSData.map((q) => (
        <HADSQuestion key={q.id} question={q} onAnswer={handleAnswer} />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
      >
        Отримати результати
      </Button>
    </Container>
  );
};

export default HADSTest;
