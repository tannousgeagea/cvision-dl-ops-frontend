import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './filter.css';
import DownArrow from '../../../assets/icons/down-arrow.png';
import useToggle from '../../../hooks/use-toggle';

const SortFilter = ({ name, data, onSortChange }) => {
    const [sortOrder, setSortOrder] = useState('Newest');
    const { isOpen, setIsOpen, filterRef, handleToggle } = useToggle()

    const handleSortChange = (order) => {
        setSortOrder(order);
        onSortChange(order);
        setIsOpen(false)
    };

    return (
        <div className="filter-container" ref={filterRef}>
            <button className="filter-content" onClick={handleToggle}>
                <div className='filter-name'>
                    {name}  
                    <span>{sortOrder}</span>
                </div>
                <img src={DownArrow} alt="Button icon" className="filter-icon" />
            </button>
            {isOpen && (
                <div className="filter-dropdown">
                    {data.map(item => (
                        <i
                            key={item}
                            className="filter-option"
                            onClick={() => handleSortChange(item)}
                        >
                            {item}
                        </i>
                    ))}
                </div>
            )}
        </div>
    );
};


SortFilter.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onSortChange: PropTypes.func.isRequired,
};

export default SortFilter;
