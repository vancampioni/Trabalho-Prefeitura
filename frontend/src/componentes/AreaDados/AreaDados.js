import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Prefeituras from '../Prefeituras/Prefeituras';
import PrefeiturasEditar from '../Prefeituras/PrefeiturasEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/prefeituras" component={Prefeituras}></Route>
        <Route exact path="/prefeituras/:idPrefeitura" component={PrefeiturasEditar}></Route>


      </Switch>

    </div>
  );
}

