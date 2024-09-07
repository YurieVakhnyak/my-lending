import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../App.css";
import myphoto from "../components/images/mainphoto-mid.jpg";
import { AboutMyProfession } from "../data/TextConstants";

function AboutMeShort() {
  return (
    <Box
      display={"flex"}
      sx={{
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        p: 3,
        bgcolor: "#bbdefb",
      }}
    >
      <Box width={350}>
        <Typography variant="body2" color="text.secondary">
          {AboutMyProfession}
        </Typography>
      </Box>
      <Box>
        <Card sx={{ width: 350 }}>
          <CardMedia sx={{ height: 250 }} image={myphoto} title="yurie" />
        </Card>
      </Box>
    </Box>
  );
}

export default AboutMeShort;
