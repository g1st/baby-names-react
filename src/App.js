import React, { useState } from 'react';
import DisplayName from './DisplayName';
import Search from './Search';
import Favourites from './Favourites';
import babyNamesData from './babyNamesData.json';

import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleAddToFavourites = (id) => {
    const baby = babyNamesData.filter((baby) => baby.id === id);

    // return if baby already in favourites
    if (favourites.some((baby) => baby.id === id)) {
      return;
    }

    // if it's not - add to favourites
    setFavourites(favourites.concat(baby));
  };

  const handleRemoveFromFavourites = (id) => {
    const filteredFavourites = favourites.filter((baby) => baby.id !== id);

    setFavourites(filteredFavourites);
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <Favourites
        favourites={favourites}
        handleClick={handleRemoveFromFavourites}
      />
      <ul className="baby-names">
        {babyNamesData
          .filter((baby) => baby.name.toLowerCase().includes(searchValue))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name, sex }) => (
            <DisplayName
              key={id}
              id={id}
              name={name}
              sex={sex}
              handleClick={handleAddToFavourites}
            />
          ))}
      </ul>
    </div>
  );
};

export default App;
