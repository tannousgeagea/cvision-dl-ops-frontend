import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/ui/card/project-card";
import NewProjectButton from "../../components/ui/button/create-project-button";
import useFetchData from "../../hooks/use-fetch-data";
import "./projects.css";

const Projects = () => {

    const {data: projects, loading: loadingProjects, error: errorProjects} = useFetchData('/api/v1/projects')

    const navigate = useNavigate();
    const handleViewProject = (projectId) => {
        navigate(`/projects/${projectId}`, { state: { projects } });
    };

    if (loadingProjects) return <p>Loading metadata...</p>;
    if (errorProjects) return <p>Error loading data: {errorProjects.message}</p>;

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
