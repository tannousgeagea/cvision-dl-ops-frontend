import React from "react";
import './label-text.css'

const TextLabel = (props) => {
    return (
        <div className="text-label">
            <label for='label'>{props.label}</label>
            <input 
                type="text" 
                id='label'
                name={props.name}
                value={props.value} 
                onChange={(e) => props.onChange(e.target.name, e.target.value)}
                placeholder={props.placeholder}
                required
            />
        </div>
    )
}

export default TextLabel