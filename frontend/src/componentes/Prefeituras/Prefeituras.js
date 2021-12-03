import React from "react"
import './Autores.css';

import AreaDados from '../AreaDados/AreaDados';
import { useEffect, useState } from 'react';

//let aAutores = []


function Autores() {

  const [evento, setevento] = useState([])

  //  console.log("Executando fetch..")

  useEffect(() => {
    fetch('http://localhost:3003/autores/listar')
      //    .then(response => dados = response.json())    
      .then(response => response.json())
      //    .then(resposta => console.log(resposta))
      //    .then(newdados => dados.push(newdados));
      .then(response => setevento(response));
  }, []

  )

  return (
    <div id="idAutores" className="autores">
      <h1>Autores *******************</h1>
      <div className="autoresListar">
        <h1> Listando Autores </h1>

        <ul className="list_group">
          {evento.map((item, i) =>
            <li className="list-group-item" key={i}>
              <span> Código: {item.aut_codigo} </span>
              <span> Nome: {item.aut_nome} </span>
              <span> Apelido: {item.aut_apelido} </span>
              <span> A/I: {item.aut_ativoinativo} </span>
              <span> Sexo: {item.aut_sexo} </span>
              <span> Telefone: {item.aut_telefone} </span>
              <span> E-Mail: {item.aut_email} </span>
            </li>
          )
          }
        </ul>
      </div>


    </div>
  );
}

export default Autores;
