import React from "react";
import './image-modal.css'

const ImageModal = ({ isOpen, onClose, currentIndex, setCurrentIndex, images}) => {
    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    
    if (!isOpen) return null;

    return (
        <div className="modal">
            <span className="close" onClick={onClose}>&times;</span>
            <div className="modal-content">
                <button className="prev" onClick={goToPrevious}>&#10094;</button>
                <img
                    src={images[currentIndex].image_url}
                    alt={`Large view ${currentIndex}`}
                    className="large-image"
                />
                <button className="next" onClick={goToNext}>&#10095;</button>
        </div>
    </div>
    )
}

export default ImageModal