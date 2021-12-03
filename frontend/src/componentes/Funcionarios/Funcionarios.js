import React from "react"
import './Funcionarios.css';
import { useHistory } from "react-router";
import axios from "axios"

import { useEffect, useState } from 'react';

function Funcionarios() {

  const [evento, setevento] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:3001/funcionarios')   
      .then(response => response.json())
      .then(response => setevento(response));
  }, []
  )

  const funcao1 = async (parametro) => {
    await axios.put('http://localhost:3001/funcionarios/ativoInativo/' + parametro)

    fetch('http://localhost:3001/funcionarios/ativoInativo/:codigo')
      .then(response => response.json())
      .then(response => setevento(response));

  }

  console.log(evento)

  function novoFuncionario() {
    history.push("/novo")

  }

  function editarFuncionarios(parametro) {
    history.push(`/consultar/${parametro}`)

  }

  return (
    <>
      <form action={`http://localhost:3007+/funcionarios/editar/02`}>

        <div id="idFuncionario" className="funcionarios">
          <div id="corpo_rel">
            <legend> Registros de Funcionários Cadastrados</legend>
            <table id="tabela" className="table table-hover">
              <thead id="cabecalho_rel">
                <tr style={{ textAlign: 'left' }}>
                  <th scope="col"> Código </th>
                  <th scope="col"> Ativo/Inativo </th>
                  <th scope="col"> Nome </th>
                  <th scope="col"> Cargo </th>
                  <th scope="col"> Departamento </th>
                  <th scope="col"> Registro </th>
                  <th scope="col"> Prefeitura </th>
                  <th scope="col"><a href="/funcionarios/novo" onClick={novoFuncionario} className="btn btn-success btn-block">Novo Funcionário</a></th>
                </tr>
              </thead>

              <tbody id="corpo_rel">
                {evento.map((item, i) =>
                  <tr style={{ textAlign: 'left' }} key={i} >
                    <th scope="row" style={{ textAlign: 'center' }}> {item.fun_codigo} </th>
                    <td> {item.fun_ativoinativo} </td>
                    <td> {item.fun_nome} </td>
                    <td> {item.fun_cargo} </td>
                    <td> {item.fun_departamento} </td>
                    <td> {item.fun_registro} </td>
                    <td> {item.pre_codigo} </td>
                   
                    <td id="editar"> <a className="btn btn-primary btn-block" href={`/funcionarios/consultar/${item.fun_codigo}`} onClick={() => editarFuncionarios(item.fun_codigo)} type="submit" method="put"> Editar </a></td>

                    <td id="ativar"> <a className="btn btn-danger btn-block" onClick={() => funcao1(item.fun_codigo)}> Inativar </a></td>

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

export default Funcionarios;
