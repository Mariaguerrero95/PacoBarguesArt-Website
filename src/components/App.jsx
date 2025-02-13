import "../scss/App.scss";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";



function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
                {/* Ruta principal: Muestra el Hero y las 3 imágenes de la galería */}
                <Route path="/" element={<><Hero imageCount={3} /></>} /> {/* Añadido Gallery aquí */}
                {/* Ruta de galería completa */}
                <Route path="/gallery" element={<Gallery imageCount={135} />} /> 
            </Routes>
            <Footer />
        </>
    );
}


export default App;









{/*function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Hero />
            <Gallery imageCount={136}/>
            <Footer />
        </>
    )
}

export default App;*/}
