import React from "react";
import './label-text.css'

const TextLabel = (props) => {
    return (
        <div className="text-label">
            <label for='label'>{props.label}</label>
            <input type="text" id='label' placeholder={props.placeholder}/>
        </div>
    )
}

export default TextLabel