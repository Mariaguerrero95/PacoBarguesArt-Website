import "../scss/App.scss";
import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Hero />
            <Gallery imageCount={138}/>
            <Footer />
        </>
    )
}

export default App;
