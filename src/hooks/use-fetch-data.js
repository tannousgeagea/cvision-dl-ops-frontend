import { useState, useEffect } from "react";
import fetchData from "../components/api/fetch";

const useFetchData = (url_path) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (path) => {
        setLoading(true);
        try {
            const fetchedData = await fetchData(path);
            setData(fetchedData);
            setError(null);
        } catch (error) {
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData(url_path);
    }, [url_path]);

    return { data, loading, error };
};

export default useFetchData;