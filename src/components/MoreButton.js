import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function AppointmentButton() {
  return (
    <Box
      sx={{
       bgcolor: "#bbdefb",
        mt: "auto",
        display: "flex",
        justifyContent: "center",
        p: 1,
      }}
    >
      <NavLink to={"/about/"} style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          sx={{
            
            minWidth: "250px",
            maxWidth: "400px",
            width: "70vw",
          }}
        >
          Більше інформації
        </Button>
      </NavLink>
    </Box>
  );
}