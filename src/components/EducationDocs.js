import React from "react";
import { Box, Typography, CardContent, CardMedia, Card } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { docsData } from "../data/DocsData";

const EducationDocs = () => {
  return (
    <Box sx={{ color: "#0d47a1" }}>
      <Typography variant="h5" align="center">
        Дипломи та сертифікати
      </Typography>
      <Accordion sx={{ bgcolor: "#afe8fc" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Диплом магістра психології, навчальні сертифікати
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              py: 3,
              mt: "auto",
              textAlign: "center",
            }}
          >
            {docsData.map((doc) => (
              <Card key={doc.id} sx={{ maxWidth: 350 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {doc.title}
                  </Typography>
                </CardContent>
                {doc.images.map((image, index) => (
                  <CardMedia
                    key={index}
                    sx={{ height: doc.height }}
                    image={image}
                    title={doc.title}
                  />
                ))}
              </Card>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default EducationDocs;
