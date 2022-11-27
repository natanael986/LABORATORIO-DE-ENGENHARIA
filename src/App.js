
import React from 'react';
import './App.css';
import Tabuada from './Tabuada';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import Container from './Container';
import Nome from './Nome';
import Atualizar from './Atualizar';
import Arcoiris from './Arcoiris';
import Hello from './Hello';

function App() {
 
  return (
    <center>
    <div>
      <Titulo titulo = "FATEC" texto ="Faculdade de Tecnologia de Presidente Prudente" link = "https://www.fatecpp.edu.br"/>
      <Titulo2 />
      <Tabuada numero="5"/>
      <Cores />
      <Mensagem />
      <Header />
      <Container />
      <Nome />
      <Atualizar />
      <Arcoiris />
      <Hello />
    </div>
    </center>
  );
}



export default App;


