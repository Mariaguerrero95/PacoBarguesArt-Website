import "../scss/styles/Hero.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const images = Array.from({ length: 134 }, (_, i) => `./Gallery/${i + 1}.jpeg`);
    const firstThreeImages = images.slice(0, 3);

    return (
        <div className="heroContainer">
            <div className="heroImages">
                {firstThreeImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className={`heroImage ${hoveredImage === index ? "hovered" : ""}`}
                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                    />
                ))}
            </div>
            <div className="viewMoreContainer">
                <Link to="/gallery" className="viewMoreButton">VER GALERÍA</Link> {/* Enlace para navegar a la galería */}
            </div>
        </div>
    );
};

export default Hero;