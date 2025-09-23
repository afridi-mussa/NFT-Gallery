import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft/:id" element={<Details />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
