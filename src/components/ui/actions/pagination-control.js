import React from "react";
import './pagination-control.css'

const PaginationControls = ({ currentPage, totalPages, onNext, onPrevious }) => (
  <div className="pagination-controls">
    <button onClick={onPrevious} disabled={currentPage === 1}>
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button onClick={onNext} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
);

export default PaginationControls;
