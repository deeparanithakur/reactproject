import { React, Component } from 'react';

export class Stars extends Component {

    constructor () {
        super();
        this.state = { Stars: [] };
    }

    componentDidMount() {
        fetch("http://localhost:3000/star.json")
        .then(response => response.json())
        .then(person => this.setState({ Stars: person}) );

    }

    render() {
        return (
        <div>
            {this.state.Stars.map(star =>
            (<div key ={star.id}><h1>{star.name}</h1>
            <div><img src={star.image} style={{width:"400px"}}/></div>
            <h2>{star.price}</h2></div>))}
        </div>
            );
     }

  }