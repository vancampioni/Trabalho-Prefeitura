import React from "react"
import '../Funcionarios/Funcionarios.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function FuncionariosEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    const [codigo, setCodigo] = useState(0);

    const [ativoInativo, setAtivo] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [registro, setRegistro] = useState('');
    const [prefeitura, setPrefeitura] = useState('');

    const [checked, setChecked] = useState(false);

    const { idFuncionario } = useParams();

    function IfCrud() {
        console.log('Id Funcionario: ' + idFuncionario + ' - ' + idBoolean)
        if (idFuncionario === 0) {
            idBoolean = true;
        } 
    }

    useEffect(() => {
        async function getFuncionarios() {
            console.log('Funcionário: ' + idFuncionario + ' - ' + idBoolean)
            if (idFuncionario == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/funcionarios/' + idFuncionario);
                console.log(data)

                setCodigo(data[0].fun_codigo);

                setAtivo(data[0].fun_ativoinativo);
                setNome(data[0].fun_nome);
                setCargo(data[0].fun_cargo);
                setDepartamento(data[0].fun_departamento);
                setRegistro(data[0].fun_registro);
                setPrefeitura(data[0].pre_codigo);

                console.log(data[0].fun_nome)
            }
        }
        IfCrud();
        getFuncionarios();
    }, []);

    async function handleFuncionarios(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.fun_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Funcionário: ",idFuncionario)
                if (idFuncionario == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('funcionarios', data);
                } else {
                    console.log("Alteração de Registro! ",idFuncionario)
                    await urlapi.put('/funcionarios/' + idFuncionario, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--funcionario" onSubmit={handleFuncionarios} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="fun_codigo"
                                value={codigo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> A/I </label>
                            <input type="text" id="fun_ativoinativo" className="form-control"
                                name="fun_ativoinativo"
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Funcionário </label>
                            <input type="text" className="form-control"
                                name="fun_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cargo </label>
                            <input type="text" className="form-control" name="fun_cargo"
                                id="fun_cargo"
                                value={cargo}
                                onChange={e => setCargo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Departamento </label>
                            <input type="text" className="form-control" name="fun_depto"
                                id="fun_depto"
                                value={departamento}
                                onChange={e => setDepartamento(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Registro </label>
                            <input type="text" className="form-control" name="fun_registro"
                                id="fun_registro"
                                value={registro}
                                onChange={e => setRegistro(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Prefeitura </label>
                            <input type="text" className="form-control" name="pre_codigo"
                                id="pre_codigo"
                                value={prefeitura}
                                onChange={e => setPrefeitura(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/funcionarios" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
