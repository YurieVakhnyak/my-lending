import { Box, Typography, Grid } from "@mui/material";

import PsychologyIcon from "@mui/icons-material/Psychology";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import BlockIcon from "@mui/icons-material/Block";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import CloseIcon from '@mui/icons-material/Close';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Reveal from "./Reveal";

function Item({ icon, title, text }) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ color: "#1976d2", mt: 0.5 }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

function AreasOfWork() {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      
      {/* З ЧИМ ПРАЦЮЮ */}
      <Reveal>  
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 3 }}>
        <TaskAltIcon sx={{ color: "success.main", fontSize: "2rem" }} />
        <Typography variant="h4" sx={{ color: 'grey.800' }}>
          З чим я працюю
        </Typography>
      </Box>
        

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Item
            icon={<PsychologyIcon />}
            title="Тривожно-депресивні та нав’язливі стани"
            text="Тривога, панічні атаки, нав’язливі думки, компульсивні дії, емоційне виснаження."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Item
            icon={<AccessibilityNewIcon />}
            title="Наслідки психологічної травми та хронічного стресу"
            text="Досвід війни, домашнього насильства, булінгу, психологічної травматизації, ПТСР, КПТСР."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Item
            icon={<SelfImprovementIcon />}
            title="Життєві кризи та пошук сенсу"
            text="Вибір життєвого шляху, екзистенційні питання, періоди змін, втрат або внутрішньої порожнечі."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Item
            icon={<FavoriteBorderIcon />}
            title="Стосунки та самотність"
            text="Труднощі у близькості, пошук партнера, любовна залежність та співзалежні стосунки, аб'юз, зради, конфлікти в сім’ї."
          />
        </Grid>
      </Grid></Reveal>

      {/* З КИМ ПРАЦЮЮ */}
        <Reveal>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 3 }}>
        <TaskAltIcon sx={{ color: "success.main", fontSize: "2rem" }} />
        <Typography variant="h4" sx={{ color: 'grey.800' }}>
          З ким я працюю
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Item
            icon={<GroupsIcon />}
            title="Дорослі"
            text="Індивідуальні консультації онлайн з дорослими (особи старші 18 років)."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Item
            icon={<GroupsIcon />}
            title="Підлітки віком від 16 до 18 років"
            text="Робота з підлітками за умови згоди батьків або законних представників."
          />
        </Grid>
      </Grid></Reveal>

      {/* НЕ ПРАЦЮЮ */}
      <Reveal>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 3 }}>
        <CloseIcon sx={{ color: "error.main", fontSize: "2rem" }} />
        <Typography variant="h4" sx={{ color: 'grey.800' }}>
          Не працюю
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Item
            icon={<BlockIcon sx={{ color: 'error.main' }} />}
            title="Формати та запити поза моєю практикою"
            text="Парна або сімейна терапія, речовинні та ігрові залежності (гемблінг), з особами молодше 16 років."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Item
            icon={<ReportProblemOutlinedIcon sx={{ color: 'warning.main' }} />}
            title="Важкі психічні стани"
            text="Психотичні розлади, важкі депресії та стани, що потребують психіатричного лікування."
          />
        </Grid>
      </Grid></Reveal>
    </Box>
  );
}

export default AreasOfWork;

