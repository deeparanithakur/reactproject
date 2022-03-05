import {React,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl } from 'react-bootstrap';

export class Products1 extends Component {
       
    
       constructor() {
           super();
        this.state = { products1: [] };

       }

       componentDidMount() {
           fetch('http://localhost:3000/products.json')
           .then(response => response.json())
           .then(items => this.setState({ products1: items }) );
       }
    
       filterProducts =(e) => {
           this.setState({
                products1 : this.state.products1.filter (
                (el) =>el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1),
                   })
        }
                  
    
       render() {
           return(
               <div className ="container" style={{width:"100%",height:"100%"}}>
                   <div>
                       <br/>

                   <form className="d-flex">
                       <FormControl onChange={this.filterProducts}  type="search" placeholder="Search" aria-label="Search"/>
                     <Button variant="outline-success">Search</Button>
                    </form>
                    <br/>
                    </div>


                   <div className ="row p-1 m-1">
                   
                   <button className="btn btn-warning" >Our Products </button>
                       
                           {this.state.products1.map(product1 =>
                            (
                                <div className="col-4 h-5" style={{marginBottom:"30px"}}>
                                    <div className="card" style={{width: "14rem" }}>
                                    <img src={product1.image} className="card-img-top" alt="..."/>   
                                    <div className="card-body">
                                    <h5>{product1.id}</h5>
                                       <h1 className ="card-title">{product1.name}</h1>
                                       <h2 className ="card-text">{product1.price}</h2>
                                    </div>
                                </div>
                               </div>
                        
                            ))}
                    </div>
                </div>
                   
                 );
           }
       }
export default Products1;            
                   