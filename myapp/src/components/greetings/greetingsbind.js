import { getDefaultNormalizer } from "@testing-library/react";


//import {react, Component} from'react';


class greetings extends Component {
     
    constructor() {
        super();
        this.state = { name: 'Deepa', email :' deeparani15raichur1987@gmail.com'};
        this.salary =54218451;
        this.greet = this.greet.bind(this);
        
    }

    ///greet =(element) => {
        ///console.log('Deepa: ' , element.target.value);
        //this.setState ({ name: element.target.value })
       ///};

       greet  = (element) => {
        console.log('Deepa: ' , element.target.value);
        this.setState ({ name: element.target.value })
       };



    render() {
        return ( 
            <div>
                <p> {this.state.name}</p>
                <p>{this.state.email}</p>
                <button onClick ={ 
                    this.greet
                     } value ='God'>Click Me</button>
            </div>
        )
    }
        


    ///here bind(the whole line) is ES5 function.(line 11)
    ///n from lines 15 to 18are ES6 ... we can write in any form...but preferable in ES6