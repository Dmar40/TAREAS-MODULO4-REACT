
import './App.css'
import {Titulo}  from './components/Titulo';
import {Imagen} from './components/Imagen';
import {Details} from './components/Details';


function App() {

  return (
    <div className='card'>
      <Titulo Title='Vegeta' />
      <Imagen />
      <Details genre= 'Masculino' status= 'Vivo'/>
      
    </div>
  );
}

export default App
