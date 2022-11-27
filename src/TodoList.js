import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h1>Tarefas</h1>
                <ul>
                    {this.props.itens.map(
                        item => (<li key={item.id}>{item.text}</li>)
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoList;