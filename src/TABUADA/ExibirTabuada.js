import React from 'react';
import Tabuada from './Tabuada';

let n = parseInt(prompt("Informe um número", "5"));

function ExibirTabuada() {
    return (
        <div>
            <Tabuada numero={n} />
        </div>
    );
}

export default ExibirTabuada;
