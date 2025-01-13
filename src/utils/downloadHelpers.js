import JSZip from "jszip";
import { saveAs } from "file-saver";
import axios from "axios";
import { baseURL } from "../components/api/base";


export const handleDownloadReviewedImages = async (projectId) => {
  try {
    console.log(`${baseURL}/api/v1/projects/${projectId}/images?reviewed=true`)
    const response = await axios.get(`${baseURL}/api/v1/projects/${projectId}/images?reviewed=true`);
    const data = response.data?.data;

    if (!data.length) {
      alert("No reviewed images available for download.");
      return;
    }

    const zip = new JSZip();
    const fetchImages = data.map(async (image, index) => {
      const imageResponse = await axios.get(image.image_url, { responseType: "blob" });
      const imageBlob = imageResponse.data;
      zip.file(`${image.image_name}.jpg`, imageBlob, { binary: true });
    });

    await Promise.all(fetchImages);
    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, `${projectId}.zip`);
  } catch (err) {
    console.error("Error downloading images:", err);
    alert("Failed to download reviewed images, ", err);
  }
};
