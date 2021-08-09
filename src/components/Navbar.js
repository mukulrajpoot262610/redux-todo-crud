import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const NavbarComp = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">REDUX TODO APP</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
