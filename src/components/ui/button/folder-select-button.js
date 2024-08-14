import React, { useRef } from 'react';
import './file-select-button.css'

import folderUpload from '../../../assets/icons/icons8-mappe.svg'

const FolderSelectButton = ({ onChange }) => {
    const fileInputRef = useRef(null);
    const handleClick = () => {
        // when the button is clicked, triger the file input click event
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <input 
                type='file'
                webkitdirectory="false"
                directory=""
                multiple
                id='fileInput'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={onChange}
            />

            <button id='selectFileButton' onClick={handleClick} className='upload-file-button'>
                <span className='upload-button-text'>
                    <img src={folderUpload} alt="Button icon" className="button-icon"/>
                    Select Folder
                </span>
            </button> 

        </>
    );
};

export default FolderSelectButton