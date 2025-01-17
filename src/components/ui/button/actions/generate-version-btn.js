import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generateIcon from "../../../../assets/icons/actions/plus.png";
import { handleDownloadReviewedImages } from "../../../../utils/downloadHelpers";
import './generate-version-btn.css'


const GenerateDatasetVersion = ({ projectId }) => {
    const navigate = useNavigate()
    const handleGenerateVersion = (projectId) => {
        navigate(`/projects/${projectId}/versions/generate`)
    }

    return (
        <>
            <button className="download-btn" onClick={() => handleGenerateVersion(projectId)}>
                <img src={generateIcon} alt="generate-icon" />
                Generate Version
            </button>
        </>
      );
    };


export default GenerateDatasetVersion
