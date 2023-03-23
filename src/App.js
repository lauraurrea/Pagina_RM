import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route, BrowserRouter as Router} from "react-router-dom";


import Menu from './componentes/Menu/Menu';


function App() {
  return (
    <>
      <Router>
        <Menu/>
      </Router>
    </>
  );
}

export default App;

