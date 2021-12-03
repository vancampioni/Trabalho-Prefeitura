import React from "react"
import './PrefeiturasEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function PrefeiturasEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    const [codigo, setCodigo] = useState(0);

    const [ativoInativo, setAtivo] = useState('');
    const [prefeito, setPrefeito] = useState('');
    const [partido, setPartido] = useState('');
    const [cidade, setCidade] = useState('');
    const [estados, setEstados] = useState('');
    const [habitantes, setHabitantes] = useState('');
    const [aniversario, setAniversario] = useState('');

    const [checked, setChecked] = useState(false);

    const { idPrefeitura } = useParams();

    function IfCrud() {
        console.log('Id Prefeitura: ' + idPrefeitura + ' - ' + idBoolean)
        if (idPrefeitura === 0) {
            idBoolean = true;
        } 
    }

    useEffect(() => {
        async function getPrefeituras() {
            console.log('Prefeitura: ' + idPrefeitura + ' - ' + idBoolean)
            if (idPrefeitura == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/prefeituras/' + idPrefeitura);
                console.log(data)

                setCodigo(data[0].pre_codigo);

                setAtivo(data[0].pre_ativoinativo);
                setPrefeito(data[0].pre_prefeito);
                setPartido(data[0].pre_partido);
                setCidade(data[0].pre_cidade);
                setEstados(data[0].pre_estados);
                setHabitantes(data[0].pre_habitantes);
                setAniversario(data[0].pre_aniversario);

                console.log(data[0].pre_prefeito)
            }
        }
        IfCrud();
        getPrefeituras();
    }, []);

    async function handlePrefeituras(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.pre_prefeito);

        try {
            if (prefeito.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Prefeitura: ",idPrefeitura)
                if (idPrefeitura == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('prefeituras', data);
                } else {
                    console.log("Alteração de Registro! ",idPrefeitura)
                    await urlapi.put('/prefeituras/' + idPrefeitura, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--prefeitura" onSubmit={handlePrefeituras} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="pre_codigo"
                                value={codigo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> A/I </label>
                            <input type="text" id="pre_ativoinativo" className="form-control"
                                name="pre_ativoinativo"
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Prefeito </label>
                            <input type="text" className="form-control"
                                name="pre_prefeito"
                                value={prefeito}
                                onChange={e => setPrefeito(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Partido </label>
                            <input type="text" className="form-control" name="pre_partido"
                                id="pre_partido"
                                value={partido}
                                onChange={e => setPartido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cidade </label>
                            <input type="text" className="form-control" name="pre_cidade"
                                id="pre_cidade"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Estado </label>
                            <input type="text" className="form-control" name="pre_estados"
                                id="pre_estados"
                                value={estados}
                                onChange={e => setEstados(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Habitantes </label>
                            <input type="text" className="form-control" name="pre_habitantes"
                                id="pre_habitantes"
                                value={habitantes}
                                onChange={e => setHabitantes(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Aniversário </label>
                            <input type="text" className="form-control" name="pre_aniversario"
                                id="pre_aniversario"
                                value={aniversario}
                                onChange={e => setAniversario(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/prefeituras" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
