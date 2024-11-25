import React from "react";
import './image-gallery.css'

const ImagePreview = ( {images} ) => {
    return (
        <div className="image-preview-container">
            <div className="image-preview">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Uploaded ${image}`} 
                        className='thumbnail-preview'               
                    />
                ))}

            </div>
        </div>
    )
};

export default ImagePreview