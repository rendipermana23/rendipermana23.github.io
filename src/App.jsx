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
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/project" Component={ProjectPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
