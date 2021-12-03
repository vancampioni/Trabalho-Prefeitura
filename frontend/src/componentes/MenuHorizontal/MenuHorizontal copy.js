import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AreaDados from '../AreaDados/AreaDados.js'
import Autores from '../Autores/Autores';

import './MenuHorizontal.css';

export default function MenuHorizontal() {
/*
  var elemento = document.getElementById('idArea')
//  elemento.innerHTML = <Autores />
  elemento = <Autores />
*/
  return (
    <Router>

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/autores"> Autores </Link> </li>
              <li> <Link to="/editoras"> Editoras </Link> </li>
              <li> <Link to="/livros"> Livros </Link> </li>
              <li> <Link to="/usuarios"> Usuários </Link> </li>
              <li> <Link to="/configuracoes"> Configurações </Link> </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/autores">


            </Route>
            

          </Switch>

        </div>

      </div>
    </Router>



  );
}


