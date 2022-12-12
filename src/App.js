import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Slider from "./Components/Slider";
import Home from "./Pages/Home";
import { LanguageContext } from "./Context/languageContext";
import { useState } from "react";

function App() {
  const [eng, setEng] = useState(false);
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={[eng, setEng]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/slide" element={<Slider />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
