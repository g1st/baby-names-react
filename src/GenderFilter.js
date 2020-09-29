import React, { useState } from 'react';

const GenderFilter = ({ handleShowAll, handleShowBoys, handleShowGirls }) => {
  const [selected, setSelected] = useState('all');
  return (
    <div className="btn-group">
      <button
        className={`btn ${selected === 'all' ? 'all-active' : ''}`}
        onClick={() => handleShowAll(setSelected)}
      >
        All
      </button>
      <button
        className={`btn ${selected === 'girls' ? 'girls-active' : ''}`}
        onClick={() => handleShowGirls(setSelected)}
      >
        Girl's Names
      </button>
      <button
        className={`btn ${selected === 'boys' ? 'boys-active' : ''}`}
        onClick={() => handleShowBoys(setSelected)}
      >
        Boy's Names
      </button>
    </div>
  );
};

export default GenderFilter;
