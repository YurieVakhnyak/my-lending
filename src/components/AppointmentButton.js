import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function AppointmentButton() {
  return (
    <Box
      sx={{
        bgcolor: "#afe8fc",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        p: 1,
      }}
    >
      <NavLink to={"/appointment/"} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            minWidth: "300px",
            width: "80vh",
          }}
        >
          Записатися
        </Button>
      </NavLink>
    </Box>
  );
}
