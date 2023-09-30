import "./App.css";
import Navigation from "./components/Navigation";

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Detail from "./components/Details";
import Contact from "./components/Contact";

import Film from "./components/Films";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Film f />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
