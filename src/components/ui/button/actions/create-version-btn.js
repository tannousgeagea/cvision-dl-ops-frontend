import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateVersion } from '../../../../hooks/use-create-version';
import ErrorPopup from '../../popup/error-popup';
import SuccessPopup from '../../popup/success-popup';
import LoadingPopup from '../../popup/loading-popup';
import './create-version-btn.css'


const CreateDatasetVersion = ({ projectId }) => {
    const { createVersion, loading, error } = useCreateVersion();
    const [successMessage, setSuccessMessage] = useState(null);
    const [showError, setShowError] = useState(false);

    const handleCreateVersion = async () => {
        try {
            const newVersion = await createVersion(projectId);
            setSuccessMessage('Version created successfully!');
        } catch (err) {
            console.error(err);
            setShowError(err)
        }
    };
    return (
        <>
            <button className="create-btn" onClick={() => handleCreateVersion()}>
                Create Version
            </button>

            {loading && <LoadingPopup />}
            {showError && <ErrorPopup message={error} onClose={() => setShowError(false)} />}
            {successMessage && (
                <SuccessPopup
                    message={successMessage}
                    onClose={() => setSuccessMessage(null)}
                />
            )}
        </>
      );
    };


export default CreateDatasetVersion
