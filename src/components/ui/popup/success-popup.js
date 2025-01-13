import React from "react";
import "./success-popup.css";

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="popup success-popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
