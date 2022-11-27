import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
            text: ''
        }
    }


    render() {
        return (
            <div>
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