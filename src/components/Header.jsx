import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className=''>         
            <Navbar className='py-4' bg="light" expand="lg">
                <Container>
                    <img className='me-1' style={{width: '30px'}} src="https://media.gettyimages.com/id/1141797007/vector/tablespoon-and-fork-vector.jpg?s=612x612&w=0&k=20&c=q0-5yhUREdnKZQRb0UkBmCLC3y3ISIiFeka5X9Qqbuc=" alt="" />
                    <Navbar.Brand href="#home"> <span className='text-danger'>SPICY</span>-<span className='text-primary'>Aroma</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Team</Nav.Link>
                        <Nav.Link href="#link">Blogs</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;