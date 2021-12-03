import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Prefeituras from '../Prefeituras/Prefeitura';
import PrefeiturasEditar from '../Prefeituras/PrefeiturasEditar';
import Funcionarios from '../Funcionarios/Funcionarios';
import FuncionariosEditar from '../Funcionarios/FuncionariosEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/prefeituras" component={Prefeituras}></Route>
        <Route exact path="/prefeituras/:idPrefeitura" component={PrefeiturasEditar}></Route>
        <Route exact path="/funcionarios" component={Funcionarios}></Route>
        <Route exact path="/funcionarios/:idFuncionario" component={FuncionariosEditar}></Route>


      </Switch>

    </div>
  );
}

