import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        className="search-input"
        type="search"
        placeholder="Filter baby name..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
