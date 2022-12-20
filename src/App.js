import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Slider from "./Components/Slider";
import Home from "./Pages/Home";
import { LanguageContext } from "./Context/languageContext";
import { useEffect, useState } from "react";
import Services from "./Components/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [eng, setEng] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={[eng, setEng]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/slide" element={<Slider />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
