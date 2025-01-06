// components/ui/card/ImageCard.js
import React, { useRef, useEffect } from "react";
import './image-card.css'

const ImageCard = ({ image }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = image.image_url;
    img.onload = () => {
      // Draw the image on the canvas
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Draw annotations
      if (image.annotations) {
        image.annotations.forEach((annotation) => {
          const [xMin, yMin, xMax, yMax] = annotation.xyxyn.map((coord, index) =>
            index % 2 === 0 ? coord * canvas.width : coord * canvas.height
          );


          // Draw the bounding box
          ctx.strokeStyle = "yellow";
          ctx.lineWidth = 15;
          ctx.strokeRect(xMin, yMin, xMax - xMin, yMax - yMin);

        });
      }
    };
  }, [image]);

  return (
    <div className="image-card">
      <canvas ref={canvasRef} className="canvas" />
      <p>{image.image_name}</p>
    </div>
  );
};

export default ImageCard;
