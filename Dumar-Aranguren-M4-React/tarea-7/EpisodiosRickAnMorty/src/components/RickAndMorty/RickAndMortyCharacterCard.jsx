
import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Link } from 'react-router-dom';

const RickAndMortyCharacterCard = () => {
  // Paso 1. 
  const [charactersList, setCharactersList] = useState([]);
  const [buttonCard, setButtonCard] = useState(1);

  // Paso 2
  useEffect(() => {
    // Este useEffect se ejecutará una única vez cuando el componente se monte
    fetch("https://rickandmortyapi.com/api/character/?page=" + buttonCard)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharactersList(data.results);


      })

      .catch((error) => console.error('error found:', error));

  }, [buttonCard]);


  const botonPrev = () => {
    setButtonCard(buttonCard - 1)
  }

  const botonNext = () => {
    setButtonCard(buttonCard + 1)
  }
  return (
    <div>
      <div className='Container-Card'>

        {charactersList.map((characters) => (
          <Link to={`/characters/${characters.id}`} key={characters.id}>

            <CharacterCard

              name={characters.name}
              image={characters.image}
              species={characters.genre}
              status={characters.status}
            />
          </Link>

        ))}
      </div>
      <div className="pagination-buttons">

        <button className='button' disabled={buttonCard === 1} onClick={botonPrev}>
          Anterior
        </button>
        <p>{buttonCard}</p>

        <button className='button' disabled={buttonCard === 42} onClick={botonNext}>
          Siguiente
        </button>

      </div>
    </div>
  );

}
export default RickAndMortyCharacterCard