import React from 'react';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';

function Extras() {
  return (
    <div>
      <Cores />
      <Mensagem />
      <Header />
      <Titulo titulo="Fatec"
        texto="Faculdade de tecnologia de Presidente Prudente"
        link="https://www.fatecpp.edu.br"
      />
      <Titulo2 />
    </div>
  );
}

export default Extras;
