import React from 'react';
import "./App.css";
import RickAndMortyCharacterCard from './components/RickAndMorty/RickAndMortyCharacterCard';


function App() {
  return (
      <div>
        <h1>RICK AND MORTY</h1>
    <div className='Container'>
      <div className='Card'>
        <RickAndMortyCharacterCard id={1} />
      </div>
      <div className='Card'>
        <RickAndMortyCharacterCard id={2} />
      </div>
      <div className='Card'>
        <RickAndMortyCharacterCard id={3} />
      </div>
      <div className='Card'>
        <RickAndMortyCharacterCard id={10} />

      </div>
    </div>
    </div>

  );
}

export default App;
