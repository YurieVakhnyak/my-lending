import React from "react";
import { Box, Typography, CardContent } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import photoDiplomFacial from "../components/images/diplom-magistr-facial.jpg";
import photoDiplomBack from "../components/images/diplom-magistr-back.jpg";

const EducationDocs = () => {
  return (
    <Box
      sx={{
        color: "inherit",
        // bgcolor: "#1a237e",
        py: 3,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" align="center">
        Дипломи та сертифікати
      </Typography>
      <Box>
        <Card sx={{ maxWidth: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Диплом магістра психології
            </Typography>
            {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
          <CardMedia
            sx={{ height: 220 }}
            image={photoDiplomFacial}
            title="diploma of psyhology facial side"
          />
          <CardMedia
            sx={{ height: 220 }}
            image={photoDiplomBack}
            title="diploma of psyhology back side"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default EducationDocs;
