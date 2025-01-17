import React, { useState } from 'react';
import { useDownloadVersion } from '../../../../hooks/use-download-version';
import ErrorPopup from '../../popup/error-popup';
import SuccessPopup from '../../popup/success-popup';
import LoadingPopup from '../../popup/loading-popup';
import splitIcon from '../../../../assets/icons/actions/download.png'
import './download-version-btn.css'


const DownloadVersionBtn = ({ projectId, versionID }) => {
    const { downloadVersion, loading, error } = useDownloadVersion();
    const [showError, setShowError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleDownload = async () => {
        try {
            await downloadVersion(projectId, versionID);
            setSuccessMessage("Dataset Successfully downloaded !");
        } catch (error) {
            console.log(error)
            setShowError(error)
        }
    };

    return (
        <div className='download-btn-container'>
            <button
                className="download-btn"
                onClick={handleDownload}
                disabled={loading}
            >   
                <img src={splitIcon} alt="generate-icon" />
                Download Dataset
            </button>
            

            {loading && <LoadingPopup />}
            {showError && <ErrorPopup message={error} onClose={() => setShowError(false)} />}
            {successMessage && (
                <SuccessPopup
                    message={successMessage}
                    onClose={() => setSuccessMessage(null)}
                />
            )}
        </div>
    );
};

export default DownloadVersionBtn;
