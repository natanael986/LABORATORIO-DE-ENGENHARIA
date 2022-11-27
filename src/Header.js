import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {corfavorita: "vermelho"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({corfavorita: "verde"})
        },1000)
    }
    // static getDerivedStateFromProps(props,state){
    //     return {corfavorita: props.favcol};
    // }
    render(){
        return(
            <h1>MINHA COR FAVORITA É {this.state.corfavorita}</h1>
        )
    }
}
export default Header;