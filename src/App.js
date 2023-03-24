import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route, BrowserRouter as Router} from "react-router-dom";


import Menu from './componentes/Menu/Menu';

import PersonajesPagina from './componentes/Personajes/personajes';


function App() {
  return (
    <>
      <Router>
        <Menu/>
        <Routes>

          <Route path='/personajes' element={<PersonajesPagina/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

