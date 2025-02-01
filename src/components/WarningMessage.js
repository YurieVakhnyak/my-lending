import { Alert, Typography } from "@mui/material";

const WarningMessage = () => {
  return (
    <Alert
      severity="warning"
      sx={{ bgcolor: "#bbdefb", fontSize: "1rem", lineHeight: 1.5 }}
    >
      <Typography component="span" fontWeight="bold" color="inherit">
        Зверніть увагу!
      </Typography>{" "}
      Усі представлені тести та скринінгові інструменти носять виключно
      ознайомчий характер. Вони не замінюють професійної консультації лікаря чи
      психолога. Самостійна інтерпретація результатів без участі фахівця може
      бути некоректною.
    </Alert>
  );
};

export default WarningMessage;
