import {
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const PCL5Question = ({ question, onAnswer }) => {
  return (
    <Container sx={{ textAlign: "justify", mb: 3 }}>
      <FormControl component="fieldset">
        <FormLabel sx={{ fontSize: "1.3rem" }}>
          {question.id}. {question.text}
        </FormLabel>
        <RadioGroup
          onChange={(e) => onAnswer(question.id, Number(e.target.value))}
        >
          {question.options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              value={opt.value}
              control={<Radio />}
              label={opt.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default PCL5Question;
