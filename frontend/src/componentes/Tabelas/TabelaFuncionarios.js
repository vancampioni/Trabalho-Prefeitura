import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      let status = '';
      if (item.fun_ativoinativo === 'A') {
        status = 'Ativo'
      } else {
        status = 'Inativo'
      }

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.fun_codigo}>
          <td> {item.fun_codigo} </td>
          <td> {status} </td>
          <td> {item.fun_nome} </td>
          <td> {item.fun_cargo} </td>
          <td> {item.fun_departamento} </td>
          <td> {item.fun_registro} </td>
          <td> {item.pre_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.fun_codigo} > Editar </a></td>
          <td id="ativar"> <a className="btn btn-danger btn-block" href={props.chave + item.fun_codigo} > Inativar </a></td>
          <td> <Link to={props.chave + item.fun_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
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
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Funcionário</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}