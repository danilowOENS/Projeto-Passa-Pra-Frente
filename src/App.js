import React from 'react';
import './App.scss';
import Home from './componentes/Home.js';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
  return(
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    {/* <Route exact path="/Cadastro" component={Cadastro}/> */}
    {/* <Route path="/Parceria" component={Parceria}/> */}
    {/* <Route path="/comoDoar" component={comoDoar} /> */}

   </BrowserRouter>
  );
}

export default App;
