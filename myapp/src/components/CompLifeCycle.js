import {React,Component } from 'react';

class ComponentLifeCycle extends Component {

    constructor () {
        super();
        this.state={buttonText:'result'}
        console.log('constructor called');
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps called');
    }

    doSomething = (e) => {
        console.group('Called' + e.target.innerText);
        this.setState({ buttonText:e.target.innerText });
    }

    render() {
        console.log('render called');

        return (
        <div>
            <h1>ComponentLifeCycle</h1>
            <button onClick ={this.doSomething}>Click Me 1</button>
            <button onClick ={this.doSomething}>Click Me 2</button>
            <h2>{this.state.buttonText}</h2>
        </div>
        )
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate called');8
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate called');
    }

    componentDidUpdate() {
        console.log('componentsDidUpdate called');

    }

    componentDidMount() {
        console.log('componentDidMount  called');
    }
} 


export default ComponentLifeCycle;


////5 methods in ComponenentLifeCycle:

/// 1) getDerivedStateFromProps()
 //// 2) shouldComponentUpdate()
 ///3)  getSnapshotBeforeUpdate()
 ///4) componentDidUpdate()
 ////5)componentDidMount()