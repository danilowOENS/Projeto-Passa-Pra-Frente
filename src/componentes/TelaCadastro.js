import React from 'react';
import './TelaCadastro.scss'
import Container from './Container.js';
import i from '../imagem/multidão3.jpg';


const TelaCadastro = ({}) => {
  
      return (
        <div className="TelaCadastro">
          
          <Container 
          texto="Ainda não possui cadastro?"
          subTexto="Clique abaixo e junte-se a nós"
          doador="Cadastre-se Doador"
          escola="Cadastre-se Escola"
          />
        </div>
       
      )
    }
    export default TelaCadastro;