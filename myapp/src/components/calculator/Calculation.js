import {React,Component } from'react';
class Calculation extends Component{
    constructor() {
        super();
        this.state = { firstnum : 'first Number', secondnum: 'second Number', res: 'Result'};
    }

    doCalculate =(e) => {
        switch (e.target.value) {
            case '+': this.setState({ res: parseFloat(this.state.firstnum) + parseFloat(this.state.secondnum) });
            break;
            case '-': this.setState({ res: parseFloat(this.state.firstnum) - parseFloat(this.state.secondnum) });
            break;
            case '*': this.setState({ res: parseFloat(this.state.firstnum) * parseFloat(this.state.secondnum) });
            break;
            case '/': this.setState({ res: parseFloat(this.state.firstnum) / parseFloat(this.state.secondnum) });
            break;
    }
 }

 render() {
     return (
         <div style = {{ marginLeft : '600px'}}>
             <h1>Calculator</h1>
             <p>{this.state.firstnum}</p>
             <p>{this.state.secondnum}</p>
             <p>{this.state.res}</p>


             <p>Enter first number : </p>
             
             <input style ={{ width :'200px'}} onChange ={
                 (e) => {
                     this.setState({ firstnum : e.target.value })
                 }
              }></input><br/>


             <p>Enter second number : </p>
             <input style = {{width : '200px'}} onChange ={
                 (e) => {
                     this.setState({ secondnum : e.target.value})
                 }
             }></input><br/>

            
            
             <button style ={{ width: '50px', marginLeft: '5px'}} value='+' onClick={(e) => {
                 this.doCalculate(e);
             }}>+</button>


             <button style ={{ width: '50px' ,marginLeft: '5px'}} value='-' onClick ={(e)=> {
                 this.doCalculate(e);
             }}>-</button>


             <button style ={{width : '50px', marginLeft : '5px'}}  value='*' onClick ={(e) =>{
                 this.doCalculate(e);
             }}>*</button>

             <button style ={{ width : '50px', maginLeft : '5px'}} value="/" onClick ={(e) =>{
                 this.doCalculate(e);
             }}>/</button>

          </div>
            )

       }

 }

   export default Calculation;