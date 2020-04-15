import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.scss';


function NavbarComponent() {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">S</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <div>
                        <Button variant="outline-danger" className="download-btn">Download My CV</Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;