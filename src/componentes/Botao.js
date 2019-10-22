import React from 'react';
import './Botao.scss'

const Botão = ({children}) => {
    return (
        <button className="Botao">{children}</button>
    )
}


export default Botão;