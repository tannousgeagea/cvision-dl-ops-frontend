import { useState } from "react";

function useSelectFile() {
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]); // Rename rawfiles to files for consistency

    const handleFileSelect = (e) => {
        const newFiles = Array.from(e.target.files);
        const fileURLs = newFiles.map(file => URL.createObjectURL(file));

        setImages(prevImages => [...prevImages, ...fileURLs]);
        setFiles(prevFiles => [...prevFiles, ...newFiles]); // Update files state
        e.target.value = ''; // Reset input for re-uploading the same file if needed
    };

    return { files, images, handleFileSelect };
};

export default useSelectFile;