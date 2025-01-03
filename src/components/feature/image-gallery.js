import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../ui/modal/image-modal";
import './image-gallery.css';

const ImageGallery = ({ images, handleImageClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    }

    if (!images || images.length === 0) return <p>No images available.</p>;

    return (
        <div className="image-preview-container">
            <div className="image-preview">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.image_url}
                        alt={`Uploaded ${index}`}
                        className="thumbnail-preview"
                        loading="lazy"
                        // onClick={() => handleImageClick(index)}
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {isOpen && (
                <ImageModal 
                    isOpen={isOpen}
                    onClose={onClose}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    images={images}
                />
            )}
        </div>
    );
};

export default ImageGallery;
