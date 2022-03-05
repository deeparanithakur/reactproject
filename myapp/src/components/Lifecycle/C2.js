import  { React,Component } from 'react';
class C2 extends Component {
    constructor() {
        super();
        this.state = {name: 'Deepa' , email: 'deeparani15raichur1987@gmail.com'};

    }
    getDerivedStateFromProps =() => {
        console.log('getDerivedStateFromProps function is called');
    }

    componentDidMount=()=> {
        console.log('componentDidMount function is called');
    }


    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <input onChange ={
                    (e) => {
                        this.setState({name: e.target.value})
                    }
                }></input>
            </div>
        )
    }
}

export default C2;