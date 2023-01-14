import React from 'react'
import './NavbarComponent.css'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="m-auto design-nav">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/anime">Anime</Nav.Link>
                    <Nav.Link as={NavLink} to="/action">Action</Nav.Link>
                </Nav>
                <Navbar.Brand as={Link} to="/">MOVIEMANIA</Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link as={NavLink} to="/horror">Horror</Nav.Link>
                    <Nav.Link as={NavLink} to="/mystery">Mystery</Nav.Link>
                    <Nav.Link as={NavLink} to="/romantic">Romantic-Comedy</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent