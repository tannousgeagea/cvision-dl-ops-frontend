import { useState, useEffect } from "react";

const useImages = () => {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [sortOrder, setSortOrder] = useState("Newest");
    const [loading, setLoading] = useState(false);

    const fetchImages = async (filters) => {
        setLoading(true);
        try {
            const query = Object.entries(filters)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join("&");
            const response = await fetch(`http://localhost:18085/api/v1/images?${query}`);
            const data = await response.json();

            if (data && data.data) {
                setImages(data.data);
            } else {
                setImages([]);
            }
        } catch (error) {
            console.error("Error fetching images:", error);
            setImages([]);
        } finally {
            setLoading(false);
        }
    };

    console.log("Query: ", selectedFilters)
    const filterAndSortImages = () => {
        let filtered = [...images];

        // Apply sorting
        if (sortOrder === "Newest") {
            filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else {
            filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }

        setFilteredImages(filtered);
    };

    useEffect(() => {
        fetchImages(selectedFilters);
    }, [selectedFilters]);

    useEffect(() => {
        filterAndSortImages();
    }, [images, sortOrder]);

    const updateFilter = (key, value) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return {
        images: filteredImages,
        loading,
        setSortOrder,
        updateFilter,
    };
};

export default useImages;
