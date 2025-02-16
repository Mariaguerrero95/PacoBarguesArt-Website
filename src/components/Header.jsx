import "../scss/styles/Header.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen }) => {
    const location = useLocation(); // Detectar la ruta actual

    const handleLinkClick = (sectionId) => {
        setMenuOpen(false);

        // Si ya estamos en "/", hacer scroll directo
        if (location.pathname === "/") {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Si estamos en otra ruta, ir a "/" y hacer scroll después de cargar
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
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
                            <Link to="/" onClick={() => handleLinkClick("about")}>ACERCA DE</Link>
                        </li>
                        <li>
                            <Link to="/gallery" onClick={handleLinkClick}>GALERÍA</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => handleLinkClick("contact")}>CONTACTO</Link>
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

