import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function AppointmentButton() {
  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        mt: "auto",
        display: "flex",
        justifyContent: "center",
        p: 1,
      }}
    >
      <NavLink to={"/appointment/"} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            minWidth: "250px",
            maxWidth: "400px",
            width: "70vw",
            borderRadius: "15px",
          }}
        >
          Записатися на консультацію
        </Button>
      </NavLink>
    </Box>
  );
}
