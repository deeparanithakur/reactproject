import React, { useState , Component }  from "react";


/*import React, { Component } from 'react'*/

const HooksDemo = () => {
  /*  
    let array = useState('');
    let data = array[0];
    let dataSetter = array [1];
    */

    const[data, dataSetter] = useState('Deepa');
  
    return (
        <div>
        <h1>{data}</h1>
        <button onClick ={() =>{dataSetter('felight.io')}}>Change</button>
      </div>
      
    )
  };

export default HooksDemo;


/*
export default class HooksDemo extends Component {
constructor() {
    super();
    this.state = {name : 'Deepa'};
}

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick ={() =>{this.setState({name : 'felight.io'})}}>Change</button>
      </div>
    )
  }
}

////inside a function we cannot have state.
*/




