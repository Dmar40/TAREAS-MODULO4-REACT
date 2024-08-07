import React from 'react';
import "./App.css";


import { Imagen } from './component/imagen/imagenComponent';
import { Titulo } from './component/Titulo/TituloComponent';
import Details from './component/details/DetailsComponent';

function App() {

     
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
        <Titulo text={props.nombre}/>
       </div>
      <Details genre={props.genre} status={props.status}/>
      </div>
      
    </div>
  );
}



// function App() {

//   return (
//     <div className='card'>
//       <Titulo Title='Vegeta' />
//       <Imagen />
//       <Details genre= 'Masculino' status= 'Vivo'/>
      
//     </div>
//   );
// }

export default App



