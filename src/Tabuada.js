import React from 'react';

//let n = parseInt(prompt("Informe um número", "5"));

class Tabuada extends React.Component{
    render(){
        let n = parseInt(this.props.numero);
        return(
        <div>
            <h1>Tabuada do {n}</h1>
            <h3>1 x {1*n}</h3>
            <h3>2 x {2*n}</h3>
            <h3>3 x {3*n}</h3>
            <h3>4 x {4*n}</h3>
            <h3>5 x {5*n}</h3>
            <h3>6 x {6*n}</h3>
            <h3>7 x {7*n}</h3>
            <h3>8 x {8*n}</h3>
            <h3>9 x {9*n}</h3>
            <h3>10 x {10*n}</h3>
      </div>
        )
    }
}

  export default Tabuada;
