import React from 'react';
import Character from './Character';

import './styles/app.css';

import bobImage from './assets/bob.png';
import joeImage from './assets/joe.png';

const totalHp = 327;
const damage = 100;

const App = () => {
  const [joeCurrentHp, setJoeCurrentHp] = React.useState(totalHp);
  const [bobCurrentHp, setBobCurrentHp] = React.useState(totalHp);

  const handleHitJoeClick = () => {
    const remainingHp = joeCurrentHp - damage;
    if (remainingHp < 0) {
      setJoeCurrentHp(0);
    }
    else {
      setJoeCurrentHp(remainingHp);
    }
  }

  const handleHitBobClick = () => {
    const remainingHp = bobCurrentHp - damage;
    if (remainingHp < 0) {
      setBobCurrentHp(0);
    }
    else {
      setBobCurrentHp(remainingHp);
    }
  }

  return (
    <div className="row">
      <div className="col">
        <h1>
          Joe HP: {joeCurrentHp}/{totalHp}
        </h1>
        <button
          onClick={handleHitJoeClick}>
            Hit Joe! 
          </button>
        <Character
          totalHp={totalHp}
          currentHp={joeCurrentHp}
          image={joeImage}
          name="Joe"
        />
      </div>
      <div className="col">
        <h1>
          Bob HP: {bobCurrentHp}/{totalHp}
        </h1>
        <button
          onClick={handleHitBobClick}>
            Hit Bob! 
          </button>
        <Character
          totalHp={totalHp}
          currentHp={bobCurrentHp}
          image={bobImage}
          name="Bob"
        />
      </div>
    </div>
  );
};

export default App;