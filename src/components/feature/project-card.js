import React from 'react';
import './project-card.css'

const ProjectCard = ({ project }) => {

    return (
        <div className='project-card'>
            <span>{project}</span>
        </div>
    )
}


export default ProjectCard