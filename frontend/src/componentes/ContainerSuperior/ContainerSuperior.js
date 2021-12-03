import React from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal';

import './ContainerSuperior.css';

export default function ContainerSuperior() {
  return (
    <div className = "superior">

      <Cabecalho />
      <MenuHorizontal />
      
    </div>
  );
}

