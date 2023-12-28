import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className=" text-end ">
                    <Nav.Link className='px-5' href="#home">Home</Nav.Link>
                    <Nav.Link className='px-5' href="#features">Features</Nav.Link>
                    <Nav.Link className='px-5' href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header