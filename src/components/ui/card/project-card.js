import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import "./project-card.css";

const formatEditedTime = (isoDateString) => {
    const date = parseISO(isoDateString);
    return `Edited ${formatDistanceToNow(date, { addSuffix: true })}`;
};

const ProjectCard = ({ project, onView }) => {
    return (
        <div className="styled-project-card">
            <div className="card-thumbnail">
                <img
                    src={project.thumbnail || "https://via.placeholder.com/150"}
                    alt={`${project.name} Thumbnail`}
                />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <span className="card-tag">Object Detection</span>
                    <div className="card-title">
                        <span className="private-icon">🔒</span>
                        <div className="card-title-h3">{project.name}</div>
                    </div>

                </div>
                <div className="card-meta">{formatEditedTime(project.lastEdited)}</div>
                <div className="card-details">
                    Private • {project.images} Images • 0 Models
                </div>
            </div>
            <div className="card-actions">
                <button onClick={() => onView(project.name)}>•••</button>
            </div>
        </div>
    );
};

export default ProjectCard;
