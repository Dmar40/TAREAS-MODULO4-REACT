
import React from 'react';

const Details = (props) => {
  console.log(props, 'props');

  return (
    <div>
      <div className='Details'>
        <p> {props.species}</p>
      </div>
    </div>
  )
};


export default Details


