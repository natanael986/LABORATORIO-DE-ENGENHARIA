import React from 'react';
import TodoList from './TodoList';

class ExibirTODOList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    //Interrompe o processo de recarregar a página
    e.preventDefault();

    // Impede que o usuário insira itens vazios
    if (!this.state.text.length) {
      return;
    }

    // Cria o item com  o conteúdo digitado pelo usuário
    const item = {
      id: Date.now(),
      text: this.state.text
    }

    // Muda o estado do App concatenando o item com itens
    // e limpando o text
    this.setState(state => ({
      itens: state.itens.concat(item),
      text: ''
    }))
  }

  render() {
    return (
      <div>
        <div className='BodyList'>
          <form onSubmit={this.handleSubmit}>
            <div>
              <h3>Adicionar Tarefas:</h3>
            </div>
            <div className='InputList'>
              <input id="new-todo" onChange={this.handleChange} placeholder="Insira uma tarefa..." value={this.state.text} />
              <button>Inserir</button>
            </div>
          </form>
          <div className='ListPage'>
            <TodoList itens={this.state.itens} />
          </div>
        </div>
      </div>
    )
  }
}

export default ExibirTODOList;
