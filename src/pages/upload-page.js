import React from "react";
import TextLabel from "../components/ui/label-text";
import uploadIcon from "../assets/icons/upload-center.png"
import "./upload-page.css"

const UploadPage = () => {
    return (
        <div className="upload-container">
            <div className="upload-content">
                <div className='section-header'>
                    <img src={uploadIcon} className="header-icon"></img>
                    <span>Upload</span>
                </div>

                <div className='upload-page-section'>
                    <div className="upload-page-input">
                        <TextLabel 
                            label='Plant'
                            placeholder='Enter Plant ...'
                        />
                        <TextLabel 
                            label='Edge Box'
                            placeholder='Enter Edge Box ...'
                        />
                        <TextLabel 
                            label='Plant Location'
                            placeholder='Enter Plant Location ...'
                        />
                    </div>

                    <div className="upload-page-content">
                        <img src={uploadIcon} className="upload-content-icon"></img>
                    </div>
                </div>

            </div>
        </div>
        );
    }

export default UploadPage