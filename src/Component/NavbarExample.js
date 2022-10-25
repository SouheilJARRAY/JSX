import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';

function NavbarExample(){
    return (
        <NavBar bg="light" expand="lg">
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/ProfilePhoto">Profile Photo</Nav.Link>
                <Nav.Link href="/FullName">Full Name</Nav.Link>
                <Nav.Link href="/Address">Address</Nav.Link>
            </Nav>
            </NavBar.Collapse>
        </NavBar>
    );
}

export default NavbarExample;