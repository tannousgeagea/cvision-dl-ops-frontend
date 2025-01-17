import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../components/api/base';

export const useSplitDataset = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const splitDataset = async (projectId, trainRatio = 0.7) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(
                `${baseURL}/api/v1/projects/${projectId}/split?train_ratio=${trainRatio}`,
                {}
            );
            setLoading(false);
            return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.error || 'An error occurred while splitting the dataset');
            throw err;
        }
    };

    return { splitDataset, loading, error };
};
