import React from "react";

class Mensagem extends React.Component {
    
    exibir = (m) => {
        console.log(m);
    }

    render() {
        const msg ="Olá mundo";
        return (
            <div>
                <button type="button" onClick={()=>this.exibir(msg)}>Mensagem</button>            
            </div>
        );
    }
}

export default Mensagem;