import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem ,Container} from 'react-bootstrap';

const NavigationBar1 = () => {
    return (
        <div>

            
          <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                   <Nav.Link href="/">Home</Nav.Link>
                   <Nav.Link href="/products">Products</Nav.Link>
                   <Nav.Link href="/about">About Us</Nav.Link>
                   <i className ="fab fa-angellist"></i>
            </Nav>
       </Container>
       
       
  </Navbar>

  
   </div>
    

        
    );
};

export default NavigationBar1;
