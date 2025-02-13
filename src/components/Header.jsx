import "../scss/styles/Header.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
//import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <header className="headerContainer">
            <div className="headerTop">
                <p className="brandName">PACO BARGUES ART</p>

                {/* Icono de hamburguesa o X */}
                <div
                    className={`menuIcon ${menuOpen ? "hidden" : ""} desktopHidden`} // Si el menú está abierto, ocultamos la hamburguesa
                    onClick={() => setMenuOpen(true)}
                >
                    ☰
                </div>
                <div
                    className={`closeIcon ${menuOpen ? "" : "hidden"} desktopHidden`} // Si el menú está cerrado, ocultamos la X
                    onClick={() => setMenuOpen(false)}
                >
                    ✖
                </div>

                {/* Menú de navegación */}
                <nav className={`menuHeader ${menuOpen ? "open" : ""} desktopVisible`}>
                    <ul className="headerList">
                        <li>ABOUT</li>
                        <li>GALLERY</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
            <h1 className="mainTitle">BARGUES</h1>
        </header>
    );
};

// Validación de las props
Header.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
};

export default Header;


{/*const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambia el estado del menú
    };


    return (
        <header className="headerContainer">
            <div className="headerTop">
                <p className="brandName">PACO BARGUES ART</p>
                <div className="menuIcon" onClick={toggleMenu}>
                    {menuOpen ? "✖" : "☰"}
                </div>
                <nav className={`menuHeader ${menuOpen ? "open" : ""}`}>
                    <ul className="headerList">
                        <li>ABOUT</li>
                        <li>GALLERY</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
            <h1 className="mainTitle">BARGUES</h1>
        </header>
    );
};

export default Header;*/}

{/*<div className="socialIcons">
                <a href="https://www.facebook.com/share/18NwgrrqT4/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer">
                <FaFacebookF className="icon" />
                </a>
                <a href="https://www.instagram.com/collagebargues?igsh=MXMzYzY1dnRyb3J6eg==" 
                target="_blank" 
                rel="noopener noreferrer">
                <FaInstagram className="icon" />
                </a>
</div>*/}