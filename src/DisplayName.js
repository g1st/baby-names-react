import React from 'react';

const DisplayName = ({ id, name, sex, handleClick }) => {
  return (
    <li className={sex} onClick={() => handleClick(id)}>
      {name}
    </li>
  );
};

export default DisplayName;
