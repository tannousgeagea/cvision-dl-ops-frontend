import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './filter.css';

const SearchFilter = ({ placeholder, onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearchChange(value);
    };

    return (
        <div className="filter-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="filter-content"
            />
        </div>
    );
};

SearchFilter.propTypes = {
    placeholder: PropTypes.string,
    onSearchChange: PropTypes.func.isRequired,
};

export default SearchFilter;
