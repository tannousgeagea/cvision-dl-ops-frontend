import { useState } from "react";
import axios from "axios";
import { baseURL } from "../components/api/base";

export const useRequestFeedback = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestFeedback = async (projectName, imageId = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${baseURL}/api/v1/projects/${projectName}/feedback`,
        {
          params: { image_id: imageId },
        }
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || "An error occurred");
      throw err;
    }
  };

  return { requestFeedback, loading, error };
};
