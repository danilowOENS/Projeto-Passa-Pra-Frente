import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import TelaCadastro from './componentes/TelaCadastro.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={TelaCadastro} />
     
      
    
    </BrowserRouter>
    </div>
  );
}

export default App;
