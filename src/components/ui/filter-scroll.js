import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './filter.css';
import DownArrow from '../../assets/icons/down-arrow.png';

const ScrollFilter = ({ name, data, filter_value, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        onFilterChange(value);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="filter-container" ref={filterRef}>
            <button className="filter-button" onClick={handleToggle}>
                {name}
                <img src={DownArrow} alt="Button icon" className="filter-icon" />
            </button>
            {isOpen && (
                <div className="filter-dropdown">
                    <div className='filter-clear'>
                        Clear All
                    </div>
                    {data.map(item => (
                        <i
                            key={item}
                            className="filter-option"
                            onClick={() => handleOptionClick(item)}
                        >
                            {item}
                        </i>
                    ))}
                </div>
            )}
        </div>
    );
};

ScrollFilter.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    filter_value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default ScrollFilter;