// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
