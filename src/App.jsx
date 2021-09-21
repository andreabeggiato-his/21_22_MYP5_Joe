import React from 'react';
import Character from './Character';

import bobImage from './assets/bob.png';
import joeImage from './assets/joe.png';

const App = () => {
  const [character, setCharacter] = React.useState('joe');

  const handleChangeCharacterClick = () => character === 'joe' ? setCharacter('bob') : setCharacter('joe');

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleChangeCharacterClick}>Change character!</button>
      <Character
        image={character === 'joe' ? joeImage : bobImage}
        name={character}
      />
    </div>
  );
};

export default App;