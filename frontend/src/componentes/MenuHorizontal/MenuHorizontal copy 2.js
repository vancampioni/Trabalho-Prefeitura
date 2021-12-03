import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './MenuHorizontal.css';

export default function MenuHorizontal() {

  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/prefeituras"> Prefeituras </Link> </li>
              <li> <Link to="/funcionarios"> Funcionários </Link> </li>
              <li> <Link to="/configuracoes"> Configurações </Link> </li>
            </ul>
          </nav>

        </div>

      </div>

  );
}


