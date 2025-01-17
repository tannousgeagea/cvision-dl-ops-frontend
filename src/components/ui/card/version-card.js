import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";
import "./version-card.css";

const formatEditedTime = (isoDateString) => {
    const date = parseISO(isoDateString);
    return `${formatDistanceToNow(date, { addSuffix: true })}`;
};

const formatCreatedTime = (isoDateString) => {
    const date = parseISO(isoDateString)
    const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleString("en-US", options);
}

const VersionCard = ({ version, onView }) => {
    const location = useLocation()
    const { versionID } = location.state || {};

    return (
        <div className={`version-card ${versionID === version.version_number ? "selected" : ""}`} onClick={() => onView(version.version_number)}>
            <div className="version-card-content">
                <div className="version-top">
                    {formatCreatedTime(version.created_at)}
                </div>

                <div className="version-info">
                    {version.name} • {formatEditedTime(version.created_at)}</div>
                <div className="version-child">
                    Images • {version.count_images}
                </div>
            </div>
        </div>
    );
};

export default VersionCard;