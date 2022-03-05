import {React,Component} from 'react';

export class Products extends Component {
       
    
       constructor() {
           super();
        this.state = { products: [] };

       }

       componentDidMount() {
           fetch('http://localhost:3000/products.json')
           .then(response => response.json())
           .then(items => this.setState({ products: items }) );
       }
    

       render() {
           return (
           <div>
               {this.state.products.map(product =>
                (<div key ={product.id}><h1>{product.name}</h1>
                <div><img src={product.image}/></div>
                    <h2>{product.price}</h2> </div>))}
                    </div>
                    );
                }
           
            }
