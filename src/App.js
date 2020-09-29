import React from 'react';
import DisplayName from './DisplayName';
import babyNamesData from './babyNamesData.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="baby-names">
        {babyNamesData.sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name, sex }) => <DisplayName key={id} name={name} sex={sex} />)}
      </ul>
    </div>
  );
}

export default App;
