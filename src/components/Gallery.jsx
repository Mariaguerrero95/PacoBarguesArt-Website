import "../scss/styles/Gallery.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Gallery = ({imageCount}) => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const images = Array.from({ length: imageCount }, (_,i) => `${import.meta.env.BASE_URL}Gallery/${i + 1}.jpeg`);
    
    return (
        <div className="galleryContainer">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Gallery ${index + 1}`}  className={`galleryImage ${hoveredImage === index ? "hovered" : ""}`} onMouseEnter={() => setHoveredImage(index)} onMouseLeave={() => setHoveredImage(null)}/>
            ))}
        </div>
    );
};

Gallery.propTypes = {
    imageCount: PropTypes.number.isRequired,
};

Gallery.defaultProps = {
    imageCount: 138, // Número total de imágenes
};

export default Gallery;