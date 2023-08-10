import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
