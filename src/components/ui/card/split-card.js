import React from "react";
import "./split-card.css";

const SplitCard = ({ title, count, percentage, color }) => {
  return (
    <div className="split-card" style={{ borderColor: color }}>
      <div className="split-card-header">
        <span className="split-card-title">{title}</span>
        <span className="split-card-percentage" style={{ backgroundColor: color }}>
          {percentage ? `${percentage}%` : "%"}
        </span>
      </div>
      <div className="split-card-body">
        <h2>{count}</h2>
        <span>Images</span>
      </div>
    </div>
  );
};

export default SplitCard;