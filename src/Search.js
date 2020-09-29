import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input className="search-input" type="search" onChange={handleSearch} />
    </div>
  );
};

export default Search;
