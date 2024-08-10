
import React from 'react'

const Details = (props) => {
  console.log(props, "props Details");

  return (
    <div>
      <div className='Details'>

        {props.species}

      </div>
    </div>
  )
}


export default Details


