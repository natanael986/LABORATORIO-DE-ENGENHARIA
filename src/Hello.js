import React from 'react';

class Hello extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Isabela Monteiro'
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Não leia isso!');
      this.setState({
        data: 'Hello Woooord!'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div>
      {this.state.data}
    </div>
    )
  }
}

export default Hello;