import { useState } from "react";
import axios from "axios";
import { baseURL } from "../components/api/base";

export const useDownloadVersion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadVersion = async (projectId, versionId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${baseURL}/api/v1/projects/${projectId}/versions/${versionId}/download`,
        { responseType: "blob" } // This is crucial for handling file downloads
      );

      // Create a download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `version_${versionId}.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      setError(err.response?.data?.detail || "Failed to download version.");
    } finally {
      setLoading(false);
    }
  };

  return { downloadVersion, loading, error };
};
