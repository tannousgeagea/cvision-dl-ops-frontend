import { useState } from "react";

const usePreviewImage = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        // Handle the file selection logic here
        const file = event.target.files[0];
        if (file) {
          setSelectedFile(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

    const handleDelete = () => {
      setSelectedFile(null);
      setImagePreview(null);
    };

    return { selectedFile, imagePreview, handleFileChange, handleDelete };
}

export default usePreviewImage