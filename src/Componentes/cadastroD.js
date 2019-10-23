import React, { useState, } from "react";
import Input from './Input.js';

import "./CadastroD.scss";

const CadastroD = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cont,setCont] = useState(1);
  const [mensagem, setMensagem] = useState("");
  const [statu, setStatus] = useState();
  const handleSubmit = e => {
   
   const resposta = texto => {
      setMensagem(texto);
      setTimeout(() => {
        setMensagem("")
    }, 1500);
   }
   
    e.preventDefault();
    if(email === confirmEmail){

      const payload = {
        name: nome,
        email: email,
        confirmemail: confirmEmail,
        password: senha,
    }
    
    localStorage.setItem(`Dados${cont}`, JSON.stringify(payload));
    setCont(cont +1);
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmEmail("");
    resposta("Cadastrado com sucesso");
    setStatus(true);
  }

    else{
      resposta("Os emails não correspondem")
      setStatus(false);
  }
  };

   return (
     <div className="Cadastro">
       <div className="Imagem">
       <h1>Faça seu cadastro de Doador</h1>
       <p>{mensagem}</p>
       </div>
      <form onSubmit={handleSubmit}>
        <Input
           value={nome}
           type="text"
           label="Nome"
           placeholder="Nome completo"
           atualizarState={setNome}
           obrigatorio
         />
         <Input
           value={email}
           type="email"
           label="Email"
           placeholder="Digite seu email"
           atualizarState={setEmail}
         />
         <Input
           value={confirmEmail}
           type="email"
           label="Confirmar Email"
           placeholder="Confirme seu email"
           atualizarState={setConfirmEmail}
           obrigatorio
         />
         <Input
           value={senha}
           type="password"
           label="Senha"
           placeholder="Digite sua senha"
           atualizarState={setSenha}
           obrigatorio
         />
         <button>Cadastrar</button>
      </form>
    </div>
  );
};



export default CadastroD;