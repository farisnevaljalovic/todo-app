import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="light" variant="light" className='mb-5'>
            <Container>
              <Navbar.Brand href="#home">Todo App</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
