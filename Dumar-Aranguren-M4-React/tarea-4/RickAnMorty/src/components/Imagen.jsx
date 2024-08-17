import React from 'react'

 const Imagen = (props) => {
  return (
    <div className='imagen'>
        <img  src={props.url} alt='imagen' />
    </div>
  )

}
export default Imagen