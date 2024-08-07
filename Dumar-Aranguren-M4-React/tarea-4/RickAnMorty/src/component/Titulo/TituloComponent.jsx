import React from 'react'

export const Titulo = (props) => {
    console.log(props,'Titulo');
  return (
    <div>
        <span className='titulo'>

            {props.text}
        </span>
    </div>
  )
}