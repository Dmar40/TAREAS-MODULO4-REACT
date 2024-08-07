import React from 'react';
import { Imagen } from '../imagen/imagenComponent';
import { Titulo } from '../Titulo/TituloComponent';
import { Details } from '../details/DetailsComponent';
    

      const CharacterCardComponent =(props) => {
       
        return (
          <div>
            <div className='imagen'>
            <Imagen url={props.imagen}/>
            </div>
            <div className='circle'>
              {props.status}
            </div>
            <div className='content'>
             <div className='title'>
              < Titulo text={props.nombre}/>
             </div>
            <Details genre={props.genre} status={props.status}/>
            </div>
            
          </div>
        );
      }

      export default CharacterCard;