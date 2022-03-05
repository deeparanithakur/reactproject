import {React,Component}  from'react';

export class Cars extends Component {


    constructor() {
    super();
    this.state = { cars : [] };
    }


    componentDidMount() {
        fetch("http://localhost:3000/car.json")
        .then(response => response.json())
        .then(items => this.setState({ cars : items }) );

    }

    render() {
        return (
            <div>
                {this.state.cars.map(car =>
                (<div key ={car.id}><h1>{car.name}</h1>
                    <div><img src = {car.image} style ={{width :"400px" }}/></div> 
                    <h2>{car.price}</h2></div>)) }
            </div>
        );
    }

}
