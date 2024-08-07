import React, {useState, useEffect} from 'react'
import "./App.css";
// import CharacterCardComponent from '..CharacterCard/CharacterCardComponent';
import { RAMCharacterCardComponent } from "../component/RickAndMortyCharacterCard/RAMCharacterCardComponent";



const  RAMCharacterCardComponent = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = props.id;

  useEffect( () =>{
    const url ="https://rickandmortyapi.com/api/character/";
    fetch(url + rickAndMortyCharacterId)
    .then(res =>res.json())
    .then((data) =>{
      console.log(data,'data');
      setImage(data.image);
      setGenre(data.species);
      setName(data.name);
      setStatus(data.status);
    }) .catch((error)=>{
      console.error("error fetching data:",error);
    });
  },[])

  return (
    <CharacterCardComponent name={name} image={image} genre={genre} status={status} />
  )
  
}

export default RAMCharacterCardComponent;
