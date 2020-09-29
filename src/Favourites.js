import React from 'react';
import DisplayName from './DisplayName';

const Favourites = ({ favourites, handleClick }) => {
  return (
    <>
      <h2 className="favourite-title">Favourites:</h2>
      <ul className="baby-names">
        {favourites.length > 0 ? (
          favourites.map(({ id, name, sex }) => (
            <DisplayName
              key={id}
              id={id}
              name={name}
              sex={sex}
              handleClick={handleClick}
            />
          ))
        ) : (
          <span>Click on a name to add to favourites.</span>
        )}
      </ul>
      <hr />
    </>
  );
};

export default Favourites;
