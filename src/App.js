import './App.css';
import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import GetDerivedStateFromProps from './getDerivedStateFromProps';
import ShouldComponentUpdate from './shouldComponentUpdate';
import GetSnapshotBeforeUpdate from './getSnapshotBeforeUpdate';
import ComponentDidUpdate from './componentDidUpdate';
import ComponentWillUnmount from './componentWillUnmount';
import Contador from './Contador';
import TodoList from './TodoList';


let n = parseInt(prompt("Informe um número", "5"));

const Item1 = {
  id: Date.now(),
  text: "Item 1"
}
const Item2 = {
  id: Date.now(),
  text: "Item 2"
}

var itens = [Item1, Item2];

function App() {
  return (
    <div className="PageBody">
      <div className="TituloBody">
        <h1>ATIVIDADES COM REACT</h1>
      </div>
      <div className="MenuPopDown">
        <ul>
          <li>Aula 06 17/10</li>
        </ul>
        <div className="MenuDisplay">
          <Cores />

          <Titulo titulo="Fatec"
            texto="Faculdade de tecnologia de Presidente Prudente"
            link="https://www.fatecpp.edu.br"
          />

          <Titulo2 />
          <div className="MenuPopDownLista">
            <ul>
              <li>Tabuada</li>
            </ul>
            <div className="MenuDisplayLista">
              <Tabuada numero={n} />
            </div>
          </div>
        </div>
      </div>
      <div className="MenuPopDown">
        <ul>
          <li>Aula 07 24/10</li>
        </ul>
        <div className="MenuDisplay">

          <div className="MenuPopDownLista">
            <ul>
              <li>Atividade 1</li>
            </ul>
            <div className="MenuDisplayLista">
              <Mensagem />
            </div>
          </div>
          <div className="MenuPopDownLista">
            <ul>
              <li>Atividade 2</li>
            </ul>
            <div className="MenuDisplayLista">
              <Header favcol="Amarelo" />
            </div>
          </div>
          <div className="MenuPopDownLista">
            <ul>
              <li>Atividade 3</li>
            </ul>
            <div className="MenuDisplayLista">
              <div className="MenuPopDownLista">
                <ul>
                  <li>getDerivedStateFromProps</li>
                </ul>
                <div className="MenuDisplayLista">
                  <GetDerivedStateFromProps nome="Junior" />
                </div>
              </div>
              <div className="MenuPopDownLista">
                <ul>
                  <li>shouldComponentUpdate</li>
                </ul>
                <div className="MenuDisplayLista">
                  <ShouldComponentUpdate />
                </div>
              </div>
              <div className="MenuPopDownLista">
                <ul>
                  <li>getSnapshotBeforeUpdate</li>
                </ul>
                <div className="MenuDisplayLista">
                  <GetSnapshotBeforeUpdate />
                </div>
              </div>
              <div className="MenuPopDownLista">
                <ul>
                  <li>componentDidUpdate</li>
                </ul>
                <div className="MenuDisplayLista">
                  <ComponentDidUpdate />
                </div>
              </div>
            </div>
            <div className="MenuPopDownLista">
              <ul>
                <li>Atividade 4</li>
              </ul>
              <div className="MenuDisplayLista">
                <div className="MenuPopDownLista">
                  <ul>
                    <li>componentWillUnmount</li>
                  </ul>
                  <div className="MenuDisplayLista">
                    <ComponentWillUnmount />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MenuPopDown">
        <ul>
          <li>Aula 08 31/10</li>
        </ul>
        <div className="MenuDisplay">
          <Contador />
        </div>
      </div>
    </div >
  );
}

export default App;
