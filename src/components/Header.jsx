import "../scss/styles/Header.scss";
import React from "react";

const Header = () => {
    return (
    <header>
        <h1 className="firstTitle">PACO BARGUES</h1>
        <nav className="menuHeader">
            <ul className="headerList">
                <li>ABOUT</li>
                <li>GALLERY</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;