import React, { useState } from 'react';

const GenderFilter = ({ handleShowAll, handleShowBoys, handleShowGirls }) => {
  const [selected, setSelected] = useState('all');
  return (
    <div className="filter-buttons">
      <button
        className={`filter-button ${selected === 'all' ? 'all-active' : ''}`}
        onClick={() => handleShowAll(setSelected)}
      >
        All
      </button>
      <button
        className={`filter-button ${
          selected === 'girls' ? 'girls-active' : ''
        }`}
        onClick={() => handleShowGirls(setSelected)}
      >
        Girl's Names
      </button>
      <button
        className={`filter-button ${selected === 'boys' ? 'boys-active' : ''}`}
        onClick={() => handleShowBoys(setSelected)}
      >
        Boy's Names
      </button>
    </div>
  );
};

export default GenderFilter;
