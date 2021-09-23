import React from 'react';
import Character from './Character';

import bobImage from './assets/bob.png';
import joeImage from './assets/joe.png';

const App = () => {
  const [joeCurrentHp, setJoeCurrentHp] = React.useState(100);

  const handleHitJoeClick = () => {
    setJoeCurrentHp(joeCurrentHp - 5);
  }

  return (
    <div>
      <h1>
        Joe HP: {joeCurrentHp}/100
      </h1>
      <button
        onClick={handleHitJoeClick}>
          Hit Joe! 
        </button>
      <Character
        totalHp={100}
        currentHp={joeCurrentHp}
        image={joeImage}
        name="Joe"
      />
    </div>
  );
};

export default App;