import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchData from '../../hooks/use-fetch-data';
import Spinner from '../../components/ui/animation/spinner';
import ErrorPopup from '../../components/ui/popup/error-popup';
import SuccessPopup from '../../components/ui/popup/success-popup';
import { VersionHeader } from './components/version-header';
import VersionList from './components/version-list';
import VersionContent from './components/version-content';
import GenerateVersionSection from './components/generate-version';
import './versions.css';

const Versions = ({ mode }) => {
    const { projectId, versionID } = useParams();
    const navigate = useNavigate();
    const { data: versions, loading, error, refetch } = useFetchData(`/api/v1/projects/${projectId}/versions`);
    const [successMessage, setSuccessMessage] = useState(null);
    const [selectedVersion, setSelectedVersion] = useState(null);

    useEffect(() => {
        if (versions && versions.length && mode === 'view') {
            if (!versionID) {
                const latestVersion = [...versions].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
                const version_id = latestVersion.version_number
                navigate(`/projects/${projectId}/versions/${latestVersion.version_number}`, {state : { version_id }});
                setSelectedVersion(latestVersion);
            } else {
                const currentVersion = versions.find((version) => version.version_number === parseInt(versionID));
                setSelectedVersion(currentVersion);
            }
        }
    }, [versions, versionID, navigate, projectId]);

    const dataLength = versions?.length || 0

    return (
        <div className="versions">
            <VersionHeader mode={mode}/>

            {loading ? (
                <Spinner />
            ) : error ? (
                <ErrorPopup message={error.message} onClose={() => {}} />
            ) : dataLength == 0  && mode === 'view' ? (
                    <div className="no-results">
                        <i className="info-icon">ℹ️</i>
                        <span>The search returned 0 results.</span>
                    </div>
            ): (
                <div className="versions-body">
                    <VersionList 
                        versions={versions}
                        setSelectedVersion={setSelectedVersion}
                        projectId={projectId}
                    />
                    <div className="version-content">
                        {mode === "view" ? (
                            <VersionContent 
                                version={selectedVersion}
                                projectId={projectId}
                            />
                        ) :(
                            <GenerateVersionSection 
                                projectId={projectId}
                            />
                        )}
                    </div>
                </div>
            )}

            {error && <ErrorPopup message={error.message} onClose={() => {}} />}
            {successMessage && <SuccessPopup message={successMessage} onClose={() => setSuccessMessage(null)} />}
        </div>
    );
};

export default Versions;
