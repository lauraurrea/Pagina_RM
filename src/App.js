import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route, BrowserRouter as Router} from "react-router-dom";


import Menu from './componentes/Menu/Menu';
import InicioPagina from './componentes/Inicio/Inicio';

import PersonajesPagina from './componentes/Personajes/personajes';
import CapitulosPagina from './componentes/Capitulos/Capitulos';
import SugerenciasPagina from './componentes/Sugerencias/Sugerencias';

function App() {
  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<InicioPagina />}/> 
          <Route path='/personajes' element={<PersonajesPagina/>}/>
          <Route path='/capitulos' element={<CapitulosPagina/>}/>
          <Route path='/sugerencias' element={<SugerenciasPagina/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

