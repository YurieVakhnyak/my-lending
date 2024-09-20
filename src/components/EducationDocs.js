import React from "react";
import { Box, Typography, CardContent } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import photoDiplomFacial from "../components/images/diplom-magistr-facial.jpg";
import photoDiplomBack from "../components/images/diplom-magistr-back.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import photoSertificatePsyhotrauma from "../components/images/odesa-semin-trauma.jpg";
import photoSertificateIntensive from "../components/images/koktebel-intensiv.jpg";
import photoSertificatePsyhosomatyka from "../components/images/kherson-psyhosomatyka.jpg";
import photoSertificateMalyunokDushi from "../components/images/kherson-malyunok-dushi.jpg";
import photoSertificateYaltaFifteen from "../components/images/yalta-navch-prakt-seminar-fifteen.jpg";
import photoSertificateYaltaSixteen from "../components/images/yalta-psyhotherapy-seminar-sixteen.jpg";

const EducationDocs = () => {
  return (
    <Box
    // sx={{
    //   color: "inherit",
    //   // bgcolor: "#1a237e",
    //   display: "flex",
    //   flexWrap: "wrap",
    //   py: 3,
    //   mt: "auto",
    //   textAlign: "center",
    // }}
    >
      <Typography variant="h5" align="center">
        Дипломи та сертифікати
      </Typography>
      <Accordion>
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
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Сертифікат "Коктебельський інтенсив"
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ height: 440 }}
                image={photoSertificateIntensive}
                title="photo certificate intensive Koktebel"
              />
            </Card>
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Сертифікат "Психосоматичні розлади"
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ height: 440 }}
                image={photoSertificatePsyhosomatyka}
                title="photo certificate Odesa"
              />
            </Card>
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Сертифікат "Малюнок душі"
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ height: 440 }}
                image={photoSertificateMalyunokDushi}
                title="photo certificate psyhologycal festival in Kherson"
              />
            </Card>
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Сертифікат міжнародний навчальнопрактичний семінар XV
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ height: 440 }}
                image={photoSertificateYaltaFifteen}
                title="photo certificate fifteen seminar in Yalta "
              />
            </Card>
            <Card sx={{ maxWidth: 350 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Сертифікат міжнародний навчальнопрактичний семінар XVI
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ height: 440 }}
                image={photoSertificateYaltaSixteen}
                title="photo certificate fifteen seminar in Yalta "
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
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default EducationDocs;
