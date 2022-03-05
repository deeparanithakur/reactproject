import {React,Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl } from 'react-bootstrap';
import './handbag.css';

class Handbags extends Component {
       
    
       constructor() {
           super();
        this.state = { handbags: [] };

       }

       componentDidMount() {
           fetch("http://localhost:3000/handbag.json")
           .then(response => response.json())
           .then(items => this.setState({ handbags: items }) );
       }

       
       filterProducts =(e) => {//
        this.setState({
             handbags : this.state.handbags.filter (
             (el) =>el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1),
                })
            }

       render() {
           return (


            <div className ="container" style={{width:"100%",height:"100%"}}>
                   <div>
                       <br/>

                   <form className="d-flex">
                       <FormControl onChange={this.filterProducts}  type="search" placeholder="Search" aria-label="Search"/>
                     <Button variant="outline-success">Search</Button>
                    </form>
                    <br/>
                    </div>


                    {this.state.handbags.map(handbag =>
                            (
                                <div className="col-4 h-5" style={{marginBottom:"30px"}}>
                                    <div className="card" style={{width: "14rem" }}>
                                    <img src={handbag.image} className="card-img-top" alt="..."/>   
                                    <div className="card-body">
                                    <h5>{handbag.id}</h5>
                                       <h1 className ="card-title">{handbag.name}</h1>
                                       <h2 className ="card-text">{handbag.price}</h2>
                                    </div>
                                </div>
                               </div>
                        
                            ))}
                    </div>

           );
                            
       }
    }

    export default Handbags;          
