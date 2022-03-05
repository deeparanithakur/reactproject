import { getDefaultNormalizer } from "@testing-library/react";
import {react, Component} from'react';


class Greetings extends Component {
     
    constructor() {
        super()
        this.state = { name: 'Deepa'}
    }
        

       
     render() {
            return (
                <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.name}</p>
                    <p>{this.state.name}</p>
                    

                    <button onClick={()=>{this.setState({name:'felight.io'})
                        }}>Click here</button>

                    <p>{this.state.name}</p>
                    <p>{this.state.name}</p>
                    <p>{this.state.name}</p>
                    

                </div>
            )
        }

    }   
    
    export default Greetings;
