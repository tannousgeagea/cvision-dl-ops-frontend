import { baseURL } from "./base";
import axios from 'axios';

const handleUpload = async ({ files, setUploading, setUploadPercentage, setUploadComplete }) => {
    if (!files) return;

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    setUploading(true);
    setUploadPercentage(0);

    try {
      const response = await axios.post(`${baseURL}/api/v1/images?edge_box=wae-ae1-00002&location=Ludwigshafen&plant=GML`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          setUploadPercentage(percent);
        },
      });

      if (response.status === 200) {
        setUploadComplete(true);
        console.log('Upload successful!');
      } else {
        alert(`Upload Failed: ${response.json()}`);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed!');
    } finally {
      setUploading(false);
    }
  };


export default handleUpload