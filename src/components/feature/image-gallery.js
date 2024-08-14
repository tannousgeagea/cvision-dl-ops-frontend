import React from "react";
import './image-gallery.css'

const ImageGallery = ( {images} ) => {
    return (
        <div className="image-preview-container">
            <div className="image-preview">
                {images.map((image, index) => (
                    <img 
                        key={index}
                        src={image.image_url}
                        alt={`Uploaded ${image}`} 
                        className='thumbnail-preview'               
                    />
                ))}

            </div>
        </div>
    )
};

export default ImageGallery