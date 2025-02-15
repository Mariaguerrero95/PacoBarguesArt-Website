import "../scss/App.scss";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <About id="about"/>
            <Routes>
                <Route path="/" element={<><Hero imageCount={3} /></>} /> 
                <Route path="/gallery" element={<Gallery imageCount={135} />} /> 
            </Routes>
            <Contact id="contact"/>
            <Footer />
        </>
    );
}

export default App;