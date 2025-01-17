import React, { useState } from 'react';
import { useSplitDataset } from '../../../../hooks/use-split-dataset';
import Spinner from '../../animation/spinner';
import ErrorPopup from '../../popup/error-popup';
import SuccessPopup from '../../popup/success-popup';
import LoadingPopup from '../../popup/loading-popup';
import splitIcon from '../../../../assets/icons/actions/cut.png'
import './split-dataset-btn.css'


const SplitDatasetButton = ({ projectId, onSplitComplete }) => {
    const { splitDataset, loading, error } = useSplitDataset();
    const [successMessage, setSuccessMessage] = useState(null);
    const [showError, setShowError] = useState(false);

    const handleSplitDataset = async () => {
        try {
            const result = await splitDataset(projectId, 0.7);
            setSuccessMessage(result.detail);
            if (onSplitComplete) onSplitComplete(result); // Callback to refresh UI or fetch updated data
        } catch (err) {
            console.error(err);
            setShowError(true)
        }
    };

    return (
        <div className='split-btn-container'>
            <button
                className="split-dataset-btn"
                onClick={handleSplitDataset}
                disabled={loading}
            >   
                <img src={splitIcon} alt="generate-icon" />
                Split Dataset
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

export default SplitDatasetButton;
