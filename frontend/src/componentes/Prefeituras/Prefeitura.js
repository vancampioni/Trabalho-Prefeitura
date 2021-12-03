import React from "react"
import './Prefeituras.css';
import { useHistory } from "react-router";
import axios from "axios"

import { useEffect, useState } from 'react';

function Prefeituras() {

  const [evento, setevento] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:3001/prefeituras')   
      .then(response => response.json())
      .then(response => setevento(response));
  }, []
  )

  const funcao1 = async (parametro) => {
    await axios.put('http://localhost:3001/prefeituras/ativoInativo/' + parametro)

    fetch('http://localhost:3001/prefeituras/ativoInativo/:codigo')
      .then(response => response.json())
      .then(response => setevento(response));

  }

  console.log(evento)

  function novoPrefeituras() {
    history.push("/novo")

  }

  function editarPrefeituras(parametro) {
    history.push(`/consultar/${parametro}`)

  }

  return (
    <>
      <form action={`http://localhost:3007+/prefeituras/editar/02`}>

        <div id="idPrefeituras" className="prefeituras">
          <div id="corpo_rel">
            <legend> Registros de Prefeituras Cadastradas</legend>
            <table id="tabela" className="table table-hover">
              <thead id="cabecalho_rel">
                <tr style={{ textAlign: 'left' }}>
                  <th scope="col"> Código </th>
                  <th scope="col"> Ativo/Inativo </th>
                  <th scope="col"> Prefeito </th>
                  <th scope="col"> Partido </th>
                  <th scope="col"> Cidade </th>
                  <th scope="col"> Estados </th>
                  <th scope="col"> Habitantes </th>
                  <th scope="col"> Aniversário </th>
                  <th scope="col"><a href="/prefeituras/novo" onClick={novoPrefeituras} className="btn btn-success btn-block">Nova Prefeitura</a></th>
                </tr>
              </thead>

              <tbody id="corpo_rel">
                {evento.map((item, i) =>
                  <tr style={{ textAlign: 'left' }} key={i} >
                    <th scope="row" style={{ textAlign: 'center' }}> {item.pre_codigo} </th>
                    <td> {item.pre_ativoinativo} </td>
                    <td> {item.pre_prefeito} </td>
                    <td> {item.pre_partido} </td>
                    <td> {item.pre_cidade} </td>
                    <td> {item.pre_estados} </td>
                    <td> {item.pre_habitantes} </td>
                    <td> {item.pre_aniversario} </td>
                   
                    <td id="editar"> <a className="btn btn-primary btn-block" href={`/prefeituras/consultar/${item.pre_codigo}`} onClick={() => editarPrefeituras(item.pre_codigo)} type="submit" method="put"> Editar </a></td>

                    <td id="ativar"> <a className="btn btn-danger btn-block" onClick={() => funcao1(item.pre_codigo)}> Inativar </a></td>

                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </form>

    </>

  );
}

export default Prefeituras;
