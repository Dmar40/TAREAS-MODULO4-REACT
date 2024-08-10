import React from 'react'


const Titulo = (props) => {
    console.log(props,'props Titulo');
    
  return (
    <div>
        <div className='Titulo'>
          {props.text}
          

        </div>
         
    </div>
  )
}
export default Titulo