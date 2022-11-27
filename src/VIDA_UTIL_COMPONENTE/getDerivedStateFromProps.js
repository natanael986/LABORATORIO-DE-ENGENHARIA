import React from "react";

class GetDerivedStateFromProps extends React.Component {
    // getDerivedStateFromProps é invocado imediatamente antes de chamar o método render,
    // ambos na montagem inicial e nas atualizações subsequente. Devem retornar um objeto
    // para atualizar o state, ou null para não atualizar nada.
    constructor(props) {
        super(props);
        this.state = {
            nome: "Natanael"
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.nome !== state.nome) {
            //Change in props
            return {
                nome: props.nome
            };
        }
        return null; // No change to state
    }
    /* if props changes then after getDerivedStateFromProps
       method, state will look something like 
  
    {
        nome: props.nome
    }
    */
    render() {
        return (
            <div>
                <h4>Meu nome é {this.state.nome}</h4>
            </div>
        )
    }

}

export default GetDerivedStateFromProps;

