import React from 'react'

export const Details = (props) => {

  return (
    <div  className='details'>
        <p>
          <b>Genero:</b>  {props.genre} 
          <br/>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  );
}
