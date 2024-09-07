import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Appointmnent from "./pages/Appointment";

function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<Appointmnent />}></Route>
      </Routes>
      <ScrollToTopButton />
    </Container>
  );
}

export default App;
