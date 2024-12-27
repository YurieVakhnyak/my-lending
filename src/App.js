import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Appointment from "./pages/Appointment";
import Articles from "./pages/Articles";
import MyVideos from "./pages/MyVideos";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/videos" element={<MyVideos />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <ScrollToTopButton />
    </Container>
  );
}

export default App;
