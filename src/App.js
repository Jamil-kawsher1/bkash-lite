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
import Footer from "./Components/Footer";
import ServicesHome from "./Pages/ServicesHome";
import ServiceCommonContent from "./Components/ServiceCommonContent";

function App() {
  const [eng, setEng] = useState(false);
  const [serviceinfo, setServiceinfo] = useState([]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceinfo(data);
      });
  }, []);
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={[eng, setEng, serviceinfo]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/slide" element={<Slider />} />
          <Route path="/services" element={<ServicesHome />}>
            <Route path="/services/:id" element={<ServiceCommonContent />} />
          </Route>
        </Routes>
        <Footer />
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
