import React, { useState } from "react";
import { handleDownloadReviewedImages } from "../../../utils/downloadHelpers";
import { useRequestFeedback } from "../../../hooks/use-request-feedback";
import feedbackIcon from "../../../assets/icons/feedback.png";
import generateIcon from "../../../assets/icons/actions/plus.png";
import LoadingPopup from "../popup/loading-popup";
import SuccessPopup from "../popup/success-popup";
import ErrorPopup from "../popup/error-popup";
import './dataset-actions.css'

const DatasetActions = ({ projectId, refetch, onFeedbackSuccess }) => {
  const { requestFeedback, loading: feedbackLoading, error: feedbackError } = useRequestFeedback();
  const [successMessage, setSuccessMessage] = useState(null);

  const handleRequestFeedback = async () => {
    try {
      await requestFeedback(projectId);
      setSuccessMessage("Feedback request was successful!");
      onFeedbackSuccess();
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCloseSuccessPopup = () => setSuccessMessage(null);

  return (
    <>
      <div className="actions">
        <button className="download-btn" onClick={() => handleDownloadReviewedImages(projectId)}>
          <img src={generateIcon} alt="generate-icon" />
          Generate Version
        </button>

        <div className="request-feedback" onClick={handleRequestFeedback}>
          <img src={feedbackIcon} alt="feedback-icon" />
          <span>{feedbackLoading ? "Requesting Feedback..." : "Request Feedback"}</span>
        </div>
      </div>

      {feedbackLoading && <LoadingPopup />}
      {feedbackError && <ErrorPopup message={feedbackError.status_description} />}
      {successMessage && <SuccessPopup message={successMessage} onClose={handleCloseSuccessPopup} />}
    </>
  );
};

export default DatasetActions;
