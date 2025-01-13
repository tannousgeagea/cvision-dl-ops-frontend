import { useState } from "react";
import axios from "axios";
import { baseURL } from "../components/api/base";

export const useCreateVersion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const createVersion = async (projectId) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(`${baseURL}/api/v1/projects/${projectId}/versions`);
      setSuccessMessage("Version created successfully!");
      return response.data;
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to create a version.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createVersion, loading, error, successMessage };
};
