import React, { useState } from "react";
import TextLabel from "../components/ui/label-text";
import uploadHeader from '../assets/icons/upload.png'
import useSelectFile from "../hooks/use-select-file";
import SubmitButton from "../components/ui/button/submit-button";
import FileSelectButton from "../components/ui/button/file-select-button";
import FolderSelectButton from "../components/ui/button/folder-select-button";
import ImagePreview from "../components/feature/image-preview";
import uploadIcon from "../assets/icons/upload-center.png"
import "./upload-page.css"

const UploadPage = () => {
    const { files, images, handleFileSelect } = useSelectFile();
    const meta_info = {
        "plant": "",
        "edge_box": "",
        "plant_location": "",
    }

    const [metaInfo, setMetaInfo] = useState(meta_info)

    const handleChange = (name, value) => {
        setMetaInfo((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="upload-container">
            <div className="upload-content">
                <div className='section-header'>
                    <div className="section-title">
                        <img src={uploadHeader} alt="upload-icon" className="header-icon"></img>
                        <span>Upload</span>
                    </div>
                    {files.length > 0 && 
                        <div className="sbumit-upload">
                            <SubmitButton onChange={handleFileSelect} />
                        </div>
                    }

                </div>

                <div className='upload-page-section'>
                    <div className="upload-page-input">
                        <TextLabel 
                            label='Plant'
                            placeholder='Enter Plant ...'
                            name='plant'
                            value={metaInfo['plant']}
                            onChange={handleChange}
                        />
                        <TextLabel 
                            label='Edge Box'
                            placeholder='Enter Edge Box ...'
                            name='edge_box'
                            value={metaInfo['edge_box']}
                            onChange={handleChange}
                        />
                        <TextLabel 
                            label='Plant Location'
                            placeholder='Enter Plant Location ...'
                            name='plant_location'
                            value={metaInfo['plant_location']}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="upload-page-content">
                        {images.length === 0 ? (
                            <div className="uplaod-content-before">
                                <img src={uploadIcon} alt="upload-icon" className="upload-content-icon"></img>
                                <span className="drag-and-drop">Drag and drop to upload, or:</span>
                                <div className="select-button-section">
                                    <div className="select-button-after">
                                        <FileSelectButton onChange={handleFileSelect} />
                                        <FolderSelectButton onChange={handleFileSelect} />
                                    </div>
                                </div>
                            </div>
                    ) : (
                        <div className="upload-content-after">
                            <div className="select-button-section">
                                <div className="select-button-after">
                                    <FileSelectButton onChange={handleFileSelect} />
                                    <FolderSelectButton onChange={handleFileSelect} />
                                </div>
                            </div>
                            <ImagePreview images={images}/>
                        </div>
                    )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPage