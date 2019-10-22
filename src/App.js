import React from 'react';

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
}


export default App;
