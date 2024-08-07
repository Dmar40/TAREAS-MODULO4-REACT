import React from 'react';
import './App.css'
import { RAMCharacterCardComponent } from "../component/RickAndMortyCharacterCard/RAMCharacterCardComponent";



    

      const CharacterCardComponent =(props) => {
      
        return (
          <div class='contenedor'>
          <div className='card'>
            <RAMCharacterCardComponent id={1}/>
          </div>
          <div className='card'>
            <RAMCharacterCardComponent id={2}/>
          </div>
          <div className='card'>
            <RAMCharacterCardComponent id={3}/>
          </div>
          <div className='card'>
            <RAMCharacterCardComponent id={10}/>
          </div>
            
            
          
          </div>
        )
      }
      export default CharacterCard;