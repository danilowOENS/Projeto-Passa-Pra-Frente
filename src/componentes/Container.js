import React from 'react';
import './Container.scss'
import {Link} from 'react-router-dom';
import Botao from './Botao.js';

const Container = ({texto, subTexto, doador, escola}) => {
  
      return (
        <div >
            <div className="Container">
                <div className="Texto">
                    <h1>{texto}</h1>
                    <h2>{subTexto}</h2>
                </div>
                <Link to="/login-doador"> <Botao>{doador}</Botao></Link>
                <Link to="/login-escola"> <Botao>{escola}</Botao></Link>
            </div>
        </div>
       
      )
    }
    export default Container;