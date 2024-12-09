import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard';


const RickAndMortyCharacterCard = (props) => {
  console.log(props,"aqui")
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = props.id;

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/"
    fetch(url + rickAndMortyCharacterId)
      .then(Response => Response.json())
      .then(data => {
        console.log(data, 'data')
        setName(data.name)
        setImage(data.image)
        setGenre(data.species)
        setStatus(data.status)

      })
      .catch((error)=>{
        console.error("Error fetching data". error);
      });

  },[]);
  return (
    <div>
      
    <CharacterCard
      name={name}
      image={image}
      genre={genre}
      status={status}
    />
  </div>
);
  
}
export default RickAndMortyCharacterCard