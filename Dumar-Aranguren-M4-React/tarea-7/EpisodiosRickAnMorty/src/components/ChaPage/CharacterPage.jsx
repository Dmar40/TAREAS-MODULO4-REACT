import React from 'react'
import RickAndMortyCharacterCard from '../RickAndMorty/RickAndMortyCharacterCard';




const CharacterPage=() => {
  return (
      <div>
        <h1>PERSONAJES DE RICK AND MORTY</h1>
    <div className='Container'>
      <div className='Card'>
        <RickAndMortyCharacterCard/>
      </div>
      </div>
     
    </div>

  );
}

export default CharacterPage;