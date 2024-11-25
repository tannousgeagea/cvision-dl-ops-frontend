import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/ui/card/project-card";
import NewProjectButton from "../../components/ui/button/create-project-button";
import "./projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "amk_front_impurity",
            lastEdited: "10 hours",
            images: Array(520).fill(null),
            thumbnail: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "tirme_impurity",
            lastEdited: "10 hours",
            images: Array(520).fill(null),
            thumbnail: "https://via.placeholder.com/150",
        },
    ]);

    const navigate = useNavigate();
    const handleViewProject = (projectId) => {
        navigate(`/projects/${projectId}`, { state: { projects } });
    };

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
                <div className="create-project">
                    <NewProjectButton />
                </div>
            </div>
            <div className="project-list">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} onView={handleViewProject} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
