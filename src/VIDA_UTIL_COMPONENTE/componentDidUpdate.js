import React from "react";

// O método componentDidUpdate() nos permite executar o código
//  React quando o componente é atualizado. Todas as requests de
//   rede que devem ser feitas quando os props passados ​​para as
//    mudanças de componente são codificadas aqui.

// O componentDidUpdate() é chamado depois de componentDidMount()
//  e pode ser útil para realizar alguma ação quando o estado do componente muda.

class ComponentDidUpdate extends React.Component {
    // Defining the state
    state = {
        company: 'GFG'
    };

    componentDidMount() {
        // Changing the state after 600ms
        setTimeout(() => {
            this.setState({ company: 'GeeksForGeeks' });
        }, 600);
    }

    componentDidUpdate() {
        document.getElementById('disclaimer').innerHTML =
            'P.s:  GFG is also known as ' + this.state.company;
    }

    render() {
        return (
            <div>
                <h1 style={{
                    margin: 'auto',
                    width: '50%',
                    padding: 20,
                    marginTop: '10%',
                    border: 'solid 1px black',
                    textAlign: 'center',
                    fontSize: 18,
                }}>
                    Greatest Science Portal For Geeks :
                    {this.state.company}
                    <div id="disclaimer"></div>
                </h1>
            </div>
        );
    }
}

export default ComponentDidUpdate;