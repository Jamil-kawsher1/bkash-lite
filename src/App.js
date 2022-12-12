import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Slider from "./Components/Slider";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/slide" element={<Slider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
