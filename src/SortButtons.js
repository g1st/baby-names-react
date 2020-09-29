import React, { useState } from 'react';

const SortButtons = ({ shuffleNames, handleSortByName }) => {
  const [sortBy, setSortBy] = useState('name');

  return (
    <div className="btn-group sort-buttons">
      <button
        className={`btn ${sortBy === 'shuffle' ? 'btn-active' : ''}`}
        onClick={() => shuffleNames(setSortBy)}
      >
        Shuffle
      </button>
      <button
        className={`btn ${sortBy === 'name' ? 'btn-active' : ''}`}
        onClick={() => handleSortByName(setSortBy)}
      >
        Sort By Name
      </button>
    </div>
  );
};

export default SortButtons;
