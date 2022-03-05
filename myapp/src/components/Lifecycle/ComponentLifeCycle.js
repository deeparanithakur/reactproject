
import {React,Component } from 'react';

class ComponentLifeCycle extends Component {

    constructor () {
        super();
        console.log('constructor called');
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps called');
    }

    doSomething = (e) => {
        console.group('Called' + e.target.innerText);
    }

    render() {
        console.log('render called');

        return (
        <div>
            <h1>ComponentLifeCycle</h1>
            <button onClick ={this.doSomething}>Click Me 1</button>
            <button onClick ={this.doSomething}>Click Me 2</button>
        </div>
        )
    }

    componentDidMount() {

        console.log('componentDidMount  called');
    }
} 


export default ComponentLifeCycle;