import React from 'react';
import Titulo  from '../Titulo';
import Imagen from '../Imagen';
import Details  from '../Details';


const CharacterCard = (props) => {
    console.log(props, 'props characterCard');
    return (

        <div className='Card'>
            <div className='imagen'>
                <Imagen url={props.image} />
            </div>
            <div className='circle'>
                {props.status}
            </div>
                <div>
                    <Titulo text={props.name} />
                </div>
           
                <div >
                    <Details species={props.species} />
                </div>
            
        </div>
    );
}

export default CharacterCard;