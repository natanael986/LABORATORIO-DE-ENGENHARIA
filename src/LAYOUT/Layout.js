import '../CSS/Styles.css';
import './Layout.css'
import React from 'react';
import Calculadora from '../CALCULADORA/Calculadora';
import Extras from '../EXTRAS/Extras';
import ExibirTabuada from '../TABUADA/ExibirTabuada';
import ExibirContador from '../CONTADOR/ExibirContador';
import ExibirComponente from '../VIDA_UTIL_COMPONENTE/ExibirComponentes';
import ExibirTODOList from '../TO_DO_LIST/ExibirTODOList';

export default class Layout extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-2">
                    <div id="list-example" class="list-group">
                        <a class="list-group-item list-group-item-action list-item" href="#list-item-1">Calculadora</a>
                        <a class="list-group-item list-group-item-action list-item" href="#list-item-2">Extras</a>
                        <a class="list-group-item list-group-item-action list-item" href="#list-item-3">Tabuada</a>
                        <a class="list-group-item list-group-item-action list-item" href="#list-item-4">Contar segundos</a>
                        <a class="list-group-item list-group-item-action list-item" href="#list-item-5">Vida util do componente</a>
                        <a class="list-group-item list-group-item-action list-item" href="#list-item-6">To do List</a>
                    </div>
                </div>
                <div class="col-8">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                        <div id="list-item-1">
                            <Calculadora />
                        </div>
                        <div id="list-item-2">
                            <Extras />
                        </div>
                        <div id="list-item-3">
                            <ExibirTabuada />
                        </div>
                        <div id="list-item-4">
                            <ExibirContador />
                        </div>
                        <div id="list-item-5">
                            <ExibirComponente />
                        </div>
                        <div id="list-item-6">
                            <ExibirTODOList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


