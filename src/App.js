import React from 'react';
<<<<<<< HEAD
// import './componentes/CadastroD';
import CadastroD from './componentes/CadastroD';

const App = () => {
  return (
    <CadastroD/>
  )
=======

import './App.scss';
import './Componentes/cadastroD';
import CadastroD from './Componentes/cadastroD';
import { BrowserRouter, Route} from 'react-router-dom';
import TelaCadastro from './componentes/TelaCadastro.js';



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={TelaCadastro} />
      <CadastroD/>
    </BrowserRouter>
    </div>
  );
>>>>>>> e4b29327c5475db5fa1126a62f7a9c2d3eb821c5
}


export default App;
