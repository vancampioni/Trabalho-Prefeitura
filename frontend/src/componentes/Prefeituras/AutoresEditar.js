import React from "react"
import './AutoresEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function AutoresEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [autor, setAutor] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [ativoInativo, setAtivo] = useState('');
    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { idAutor } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Autor: ' + idAutor + ' - ' + idBoolean)
        if (idAutor === 0) {
            //            nomeCampo = 'Inclusão de Autor';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Autor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getAutores() {
            console.log('Autor: ' + idAutor + ' - ' + idBoolean)
            if (idAutor == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/autores/' + idAutor);
                console.log(data)

                setCodigo(data[0].aut_codigo);

                setNome(data[0].aut_nome);
                setAtivo(data[0].aut_ativoinativo);
                setApelido(data[0].aut_apelido);
                setSexo(data[0].aut_sexo);
                setTelefone(data[0].aut_telefone);
                setEmail(data[0].aut_email);

                console.log(data[0].aut_nome)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getAutores();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleAutores(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.aut_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Autor: ",idAutor)
                if (idAutor == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('autores', data);
                } else {
                    console.log("Alteração de Registro! ",idAutor)
                    await urlapi.put('/autores/' + idAutor, data);
                }
                //                history.push('/autores');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleAutores} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="aut_codigo"
                                value={codigo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> A/I </label>
                            <input type="text" id="aut_ativoinativo" className="form-control"
                                name="aut_ativoinativo"
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Autor </label>
                            <input type="text" className="form-control"
                                name="aut_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="aut_apelido"
                                id="aut_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Sexo </label>
                            <input type="text" className="form-control" name="aut_sexo"
                                id="aut_sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Telefone </label>
                            <input type="text" className="form-control" name="aut_telefone"
                                id="aut_telefone"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> E-mail do Autor </label>
                            <input type="text" className="form-control" name="aut_email"
                                id="aut_email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/autores" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
