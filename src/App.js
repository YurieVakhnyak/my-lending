import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Appointment from "./pages/Appointment";
import Articles from "./pages/Articles";
import MyVideos from "./pages/MyVideos";
import ArticlePage from "./pages/ArticlePage";
import Tests from "./pages/Tests";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:id" element={<TestPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/videos" element={<MyVideos />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <ScrollToTopButton />
    </Container>
  );
}

export default App;
