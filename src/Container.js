import React from 'react';

// eslint-disable-next-line
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Apague o Título</button>
            </div>
        );
    }
}

// toda vez que o o render <h1> é alterado, o componentWillUnmount é acionado. 

class Child extends React.Component {
    componentWillUnmount() {
        alert("O componente Header está prestes a ser desmontado");
    }
    render() {
        return (
            <h1>Exercício 4</h1>
        )
    }
}

export default Child;