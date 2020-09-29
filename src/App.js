import React, { useState } from 'react';
import DisplayName from './DisplayName';
import Search from './Search';
import babyNamesData from './babyNamesData.json';

import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <ul className="baby-names">
        {babyNamesData
          .filter((baby) => baby.name.toLowerCase().includes(searchValue))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name, sex }) => (
            <DisplayName key={id} name={name} sex={sex} />
          ))}
      </ul>
    </div>
  );
};

export default App;
