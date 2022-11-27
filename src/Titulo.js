import React from 'react';

class Titulo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: this.props.titulo,
      texto: this.props.texto,
      link: this.props.link,
    };
  }
  render() {
    return (
      <div>
        <div className="MenuPopDownLista">
          <ul>
            <li>Titulos e Links</li>
          </ul>
          <div className="MenuDisplayLista">
            <h1>{this.state.titulo}</h1>
            <p>{this.state.texto}</p>
            <a href={this.state.link}>{this.state.link}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Titulo;