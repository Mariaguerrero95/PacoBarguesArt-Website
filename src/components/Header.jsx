import "../scss/styles/Header.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 
//import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = ({ menuOpen, setMenuOpen }) => {
    const handleLinkClick = () => {
        setMenuOpen(false); 
    };
    return (
        <header className="headerContainer">
            <div className="headerTop">
                <p className="brandName">PACO BARGUES ART</p>
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
                <nav className={`menuHeader ${menuOpen ? "open" : ""} desktopVisible`}>
                <ul className="headerList">
                        <li>
                            <a href="#about" onClick={handleLinkClick}>ACERCA DE</a>
                        </li>
                        <li>
                            <Link to="/gallery" onClick={handleLinkClick}>GALERÍA</Link>
                        </li>
                        <li>
                            <a href="#contact" onClick={handleLinkClick}>CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1 className="mainTitle">BARGUES</h1>
        </header>
    );
};

Header.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
};

export default Header;

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