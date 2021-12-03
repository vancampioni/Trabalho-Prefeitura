import React from "react"
import './AutoresEditar.css';

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory  } from "react-router-dom";

function AutoresEditar() {
  const [evento, setevento] = useState({})

  const {codigo} = useParams()

  function IfCrud() {

  }
  
  useEffect(() => {

    if (params.codigo) {
      consultaAutor(params.codigo)
    }

  }, []
  )

  //  let dados = []

  function consultaAutor(id) {
    console.log(id)
    fetch(`http://localhost:3003/autores/consultar/${id}`)
      .then(resposta => resposta.json())
      .then(resposta => setevento(resposta))
  }
 
//  const { evento } = useParams()
//  console.log(evento)
  const dados = []
  dados.push(evento[0])
  const { aut_codigo, aut_ativoinativo, aut_nome } = dados

//  console.log(aut_codigo + " - " + aut_ativoinativo)
  console.log(dados[0])
  console.log(dados[0].aut_nome)

//  const { aut_codigo, aut_ativoinativo, aut_nome } = evento
//  console.log(aut_nome)

  return (
    <form action="/autores/gravar" method="post">
      <div id="corpo_edit">
        <div className="form-row">
          <div className="col-md-1 offset-md-1">
            <label> Código </label>
            <input type="text" className="form-control" 
              name="aut_codigo" id="aut_codigo" readonly />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-1 offset-md-1">
            );
            <label for="aut_ativoinativo"> A/I </label>
            <input type="text" id="aut_ativoinativo" className="form-control"
              name="aut_ativoinativo" maxlength="1" />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-4 offset-md-1">
            <label> Nome do Autor </label>
            <input type="text" className="form-control" name="aut_nome"
              id="aut_nome" 
              maxlength="40" />
          </div>
        </div>

      </div>
    </form>

  )
}


export default AutoresEditar;

