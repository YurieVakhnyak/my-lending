import { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
} from "@mui/material";

const HADSQuestion = ({ question, onAnswer }) => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    onAnswer(question.id, Number(event.target.value));
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl component="fieldset" fullWidth>
        <FormLabel>{question.text}</FormLabel>
        <RadioGroup value={value} onChange={handleChange}>
          {question.options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value.toString()}
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: "1em" }}>{option.label}</Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default HADSQuestion;
