import React from 'react';

class Titulo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "FATEC",
            texto2: "Atividade feito na aula de Engenharia de Software",
            texto: "Faculdade de Tecnologia de Presidente Prudente",
            link: "https://www.fatecpp.edu.br"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.titulo}</h1>
                <p>{this.state.texto2}</p>
                <p>{this.state.texto}</p>
                <a href={this.state.link}>{this.state.link}</a>
            </div>
        )
    }
};

export default Titulo;