import React, { useState } from 'react';
import DisplayName from './DisplayName';
import Search from './Search';
import Favourites from './Favourites';
import GenderFilter from './GenderFilter';
import babyNamesData from './babyNamesData.json';
import useLocalStorage from './useLocalStorage';

import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useLocalStorage('favouriteBabies');
  const [babyNames, setBabyNames] = useState(babyNamesData);
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

  const handleShowAll = (setSelected) => {
    setBabyNames(babyNamesData);
    setSelected('all');
  };

  const handleShowBoys = (setSelected) => {
    const boys = babyNamesData.filter((baby) => baby.sex === 'm');
    setBabyNames(boys);
    setSelected('boys');
  };

  const handleShowGirls = (setSelected) => {
    const girls = babyNamesData.filter((baby) => baby.sex === 'f');
    setBabyNames(girls);
    setSelected('girls');
  };

  const filterAndSort = () => {
    return babyNames
      .filter((baby) => baby.name.toLowerCase().includes(searchValue))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const babyNamesForDisplay = filterAndSort();

  return (
    <div className="App">
      <div className="search-filter">
        <Search handleSearch={handleSearch} />
        <GenderFilter
          handleShowAll={handleShowAll}
          handleShowBoys={handleShowBoys}
          handleShowGirls={handleShowGirls}
        />
      </div>
      <Favourites
        favourites={favourites}
        handleClick={handleRemoveFromFavourites}
      />
      <ul className="baby-names">
        {babyNamesForDisplay.length > 0 ? (
          babyNamesForDisplay.map(({ id, name, sex }) => (
            <DisplayName
              key={id}
              id={id}
              name={name}
              sex={sex}
              handleClick={handleAddToFavourites}
            />
          ))
        ) : (
          <div>No matches found.</div>
        )}
      </ul>
    </div>
  );
};

export default App;
