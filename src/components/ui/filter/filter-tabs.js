// components/ui/FilterTabs.js
import React from "react";
import PropTypes from "prop-types";
import "./filter-tabs.css";

const FilterTabs = ({ filters, selectedFilter, onSelectFilter }) => {
  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <div
          key={filter.key}
          className={`tab ${selectedFilter === filter.key ? "active" : ""}`}
          onClick={() => onSelectFilter(filter.key)}
        >
          <span>
            {filter.label}
            <p>{filter.count}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

FilterTabs.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedFilter: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default FilterTabs;
