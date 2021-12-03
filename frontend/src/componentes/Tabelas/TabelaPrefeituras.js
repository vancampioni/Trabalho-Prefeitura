import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      let status = '';
      if (item.pre_ativoinativo === 'A') {
        status = 'Ativo'
      } else {
        status = 'Inativo'
      }

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.pre_codigo}>
          <td> {item.pre_codigo} </td>
          <td> {status} </td>
          <td> {item.pre_prefeito} </td>
          <td> {item.pre_partido} </td>
          <td> {item.pre_cidade} </td>
          <td> {item.pre_estados} </td>
          <td> {item.pre_habitantes} </td>
          <td> {item.pre_aniversario} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.pre_codigo} > Editar </a></td>
          <td id="ativar"> <a className="btn btn-danger btn-block" href={props.chave + item.pre_codigo} > Inativar </a></td>
          <td> <Link to={props.chave + item.pre_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

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
            <th scope="col"> Prefeito </th>
            <th scope="col"> Partido </th>
            <th scope="col"> Cidade </th>
            <th scope="col"> Estado </th>
            <th scope="col"> Habitantes </th>
            <th scope="col"> Aniversário </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Prefeitura</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}