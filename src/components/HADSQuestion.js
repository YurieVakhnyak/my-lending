import { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const HADSQuestion = ({ question, onAnswer }) => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    onAnswer(question.id, Number(event.target.value));
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel>{question.text}</FormLabel>
      <RadioGroup value={value} onChange={handleChange} row>
        {question.options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value.toString()}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default HADSQuestion;
