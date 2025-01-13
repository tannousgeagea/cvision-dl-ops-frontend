
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../components/api/base";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseURL}${url}`);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // Return data, loading, error, and the refetch function
  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;