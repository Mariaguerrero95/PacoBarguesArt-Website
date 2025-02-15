import "../scss/styles/Hero.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación

const Hero = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    // Ruta de las imágenes que se encuentran en la carpeta 'public/Gallery'
    const images = Array.from({ length: 135 }, (_, i) => `./Gallery/${i + 1}.jpeg`);

    // Limitar a las primeras 3 imágenes
    const firstThreeImages = images.slice(0, 3);

    return (
        <div className="heroContainer">
            {/* Renderizamos las primeras tres imágenes */}
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

            {/* Botón de "Ver más" */}
            <div className="viewMoreContainer">
                <Link to="/gallery" className="viewMoreButton">VER MÁS</Link> {/* Enlace para navegar a la galería */}
            </div>
        </div>
    );
};

export default Hero;