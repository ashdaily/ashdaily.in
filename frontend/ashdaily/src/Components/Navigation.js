import React from 'react';

import { Nav, Navbar } from "react-bootstrap";


export default ()=>{
    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="#home">ASH
                <span className="font-weight-bold">DAILY</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" className="text-light">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}