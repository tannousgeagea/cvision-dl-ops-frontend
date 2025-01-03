// components/ui/card/ImageCard.js
import React, { useRef, useEffect } from "react";

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
          ctx.strokeStyle = "red";
          ctx.lineWidth = 2;
          ctx.strokeRect(xMin, yMin, xMax - xMin, yMax - yMin);

          // Draw class label
          ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
          ctx.fillRect(xMin, yMin - 20, 80, 20);
          ctx.fillStyle = "#fff";
          ctx.font = "12px Arial";
          ctx.fillText(annotation.class_name, xMin + 5, yMin - 5);
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
