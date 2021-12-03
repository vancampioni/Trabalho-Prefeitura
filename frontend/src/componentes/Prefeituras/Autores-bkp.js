import React from "react"
import './Autores.css';
//import { funcao1 } from "../../scripts/script";
import { useHistory } from "react-router";
import axios from "axios"

import AreaDados from '../AreaDados/AreaDados';
import { useEffect, useState } from 'react';

//let aAutores = []


function Autores() {

  const [evento, setevento] = useState([])
  const history = useHistory()

  //  console.log("Executando fetch..")

  useEffect(() => {
    fetch('http://localhost:3007/autores/listar')
      //    .then(response => dados = response.json())    
      .then(response => response.json())
      //    .then(resposta => console.log(resposta))
      //    .then(newdados => dados.push(newdados));
      .then(response => setevento(response));
  }, []
  )

  const funcao1 = async (parametro) => {
    /*    useEffect(() => {
    //      fetch('http://localhost:3003/autores/ativoInativo/' + parametro)
    //        .then(response => response.json())
    //        .then(response => setevento(response));
        },[]
    
        )
    */

    await axios.put('http://localhost:3007/autores/ativoInativo/' + parametro)

    fetch('http://localhost:3003/autores/listar')
      .then(response => response.json())
      .then(response => setevento(response));

  }

  console.log(evento)

  //  <td id="editar"> <a className="btn btn-primary btn-block" href={`/autores/editar/${item.aut_codigo}`}> Editar </a></td>
  /*
      {`http://localhost:3002/produtos${}`}
        <form action={`http://localhost:3003+/autores/editar/${item.aut_codigo}`}>
  
  */

  function novoAutor() {
    history.push("/novo")

  }

  function editarAutor(parametro) {
/*    fetch('http://localhost:3003/autores/consultar/' + parametro)
      .then(response => response.json())
      .then(response => setevento(response))
      .then(response => console.log(response));
*/
//      console.log(parametro)
//      alert(parametro)
    history.push(`/consultar/${parametro}`)

  }

  return (
    <>
      <form action={`http://localhost:3007+/autores/editar/02`}>

        <div id="idAutores" className="autores">
          <div id="corpo_rel">
            <legend> Registros de Autores Cadastrados</legend>
            <table id="tabela" className="table table-hover">
              <thead id="cabecalho_rel">
                <tr style={{ textAlign: 'left' }}>
                  <th scope="col"> Código </th>
                  <th scope="col"> Nome </th>
                  <th scope="col"> Apelido </th>
                  <th scope="col"> Ativo/Inativo </th>
                  <th scope="col"> Sexo </th>
                  <th scope="col"> Telefone </th>
                  <th scope="col"> E-mail </th>
                  <th scope="col"><a href="/autores/novo" onClick={novoAutor} className="btn btn-success btn-block">Novo Autor</a></th>
                </tr>
              </thead>

              <tbody id="corpo_rel">
                {evento.map((item, i) =>
                  <tr style={{ textAlign: 'left' }} key={i} >
                    <th scope="row" style={{ textAlign: 'center' }}> {item.aut_codigo} </th>
                    <td> {item.aut_nome} </td>
                    <td> {item.aut_apelido} </td>
                    <td> {item.aut_ativoinativo} </td>
                    <td> {item.aut_sexo} </td>
                    <td> {item.aut_telefone} </td>
                    <td> {item.aut_email} </td>
                    {/* 
                    <td id="editar"> <a className="btn btn-primary btn-block" href={`/autores/editar/${item.aut_codigo}`}> Editar </a></td>
                    <td id="ativar"> <a className="btn btn-danger btn-block" href={`/autores/ativoInativo/${item.aut_codigo}`}> Inativar </a></td>
                    <td id="ativar"> <a className="btn btn-danger btn-block" onClick={()=>(console.log(i))} type="submit" method="put"> Inativar </a></td>                    
                    <td id="ativar"> <a className="btn btn-danger btn-block" onClick={()=>xxxfuncao1(evento, item.aut_codigo)}> Inativar </a></td>
*/}
                    <td id="editar"> <a className="btn btn-primary btn-block" href={`/autores/consultar/${item.aut_codigo}`} onClick={() => editarAutor(item.aut_codigo)} type="submit" method="put"> Editar </a></td>

                    <td id="ativar"> <a className="btn btn-danger btn-block" onClick={() => funcao1(item.aut_codigo)}> Inativar </a></td>

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

export default Autores;

//fetch('http://localhost:3003/autores/listar')
