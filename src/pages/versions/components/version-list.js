import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import VersionCard from "../../../components/ui/card/version-card";


const VersionList = ({ versions, setSelectedVersion, projectId }) => {
    const navigate = useNavigate()
    const handleViewVersion = (versionID) => {
        const selected = versions.find((version) => version.version_number === versionID);
        setSelectedVersion(selected);
        navigate(`/projects/${projectId}/versions/${versionID}`, { state: { versionID } });
    };

    return (
        <div className="versions-list">
            <h2>Existing Versions</h2>
            {versions.length ? (
                <div className="versions-selector">
                    {versions.map((version) => (
                        <VersionCard 
                            key={version.id}
                            version={version}
                            onView={() => handleViewVersion(version.version_number)}
                        />
                    ))}
                </div>
            ) : (
                <p>No versions available.</p>
            )}
        </div>
    )
};

VersionList.propTypes = {
    versions: PropTypes.array.isRequired,
    setSelectedVersion: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired,
};

export default VersionList