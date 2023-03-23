import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route, BrowserRouter as Router} from "react-router-dom";


import Menu from './componentes/Menu/Menu';
import InicioPagina from './componentes/Inicio/Inicio';


function App() {
  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<InicioPagina />}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;

