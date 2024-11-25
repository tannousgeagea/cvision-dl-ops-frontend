import { useState, useEffect } from "react";

const useFilters = () => {
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMetadata = async () => {
        try {
            const response = await fetch("http://localhost:18085/api/v1/images/metadata");
            const data = await response.json();

            if (data && data.data) {
                setFilters(data.data.filters || []);
            } else {
                setFilters([]);
            }
        } catch (error) {
            console.error("Error fetching metadata:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMetadata();
    }, []);

    return { filters, loading, error };
};

export default useFilters;
