import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Events from "./Events";
import Footer from "./Footer";  // Asegúrate de importar el Footer

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
      <Footer /> {/* Coloca el Footer aquí */}
    </>
  );
};

export default App;
