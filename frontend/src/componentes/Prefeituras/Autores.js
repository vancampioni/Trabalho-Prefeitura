import React from "react"
import './Autores.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaAutores";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Autores() {
  const [autores, setAutores] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('autores')
      .then(response => setAutores(response.data));
  }, []
  )

  return (
    <>
        <div id="idAutores" className="autores">
          <div id="corpo_rel">
            <legend> Registros de Autores Cadastrados</legend>
            <Link to="/autores/0" value={'I'}>incluir Novo Autor</Link>

            <div>

              <Tabela
                items={autores}
                chave={'/autores/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Autores;

