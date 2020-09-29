import React from 'react';

const GenderFilter = ({ handleShowAll, handleShowBoys, handleShowGirls }) => {
  return (
    <div className="filter-buttons">
      <button className="filter-button" onClick={handleShowAll}>
        All
      </button>
      <button className="filter-button" onClick={handleShowGirls}>
        Girl's Names
      </button>
      <button className="filter-button" onClick={handleShowBoys}>
        Boy's Names
      </button>
    </div>
  );
};

export default GenderFilter;
