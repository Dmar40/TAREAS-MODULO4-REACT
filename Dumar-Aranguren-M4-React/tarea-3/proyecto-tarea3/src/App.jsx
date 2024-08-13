
import './App.css'
import {Titulo}  from './components/Titulo';
import {Details} from './components/Details';
import Imagen from './components/Imagen';


function App() {

  return (
  
    <div className='container'>
       <Titulo Title= 'title' />
    <div className='card'>
      <Imagen/>
      
       <div className='circle'>
      <h5> Vegeta</h5>
      </div>
      <Details genre= 'Masculino' status= 'Vivo'/>
    
      
    </div>
    </div>
  );
}

export default App
