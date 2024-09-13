import React from "react";
import { Box, Typography, CardContent } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import photoDiplomFacial from "../components/images/diplom-magistr-facial.jpg";
import photoDiplomBack from "../components/images/diplom-magistr-back.jpg";
import photoSertificatePsyhotrauma from "../components/images/odesa-semin-trauma.jpg";

const EducationDocs = () => {
  return (
    <Box
      sx={{
        color: "inherit",
        // bgcolor: "#1a237e",
        display: "flex",
        flexWrap: "wrap",
        py: 3,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" align="center">
        Дипломи та сертифікати
      </Typography>

      <Box
        sx={{
          color: "inherit",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          py: 3,
          mt: "auto",
          textAlign: "center",
        }}
      >
        <Card sx={{ maxWidth: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Диплом магістра психології
            </Typography>
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
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Сертифікат "Подолання психотравми"
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 220 }}
            image={photoSertificatePsyhotrauma}
            title="photo certificate Odesa"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default EducationDocs;
