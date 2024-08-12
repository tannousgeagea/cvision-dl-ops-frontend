
import React from 'react';
import PropTypes from 'prop-types';
import './filter.css';

const ScrollFilter = ({ name, data, filter_value, onFilterChange }) => {
    return (
        <div className="filter-container">
            {/* <label htmlFor="value.select">{name}</label> */}
            <select
                id="value-select"
                value={filter_value}
                onChange={e => onFilterChange(e.target.value)}
            >
                <option value="">{name}</option>
                {data.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
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