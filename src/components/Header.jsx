import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
                        <Link className='text-decoration-none' to="/">Home</Link>
                        <Link className='text-decoration-none px-3' to="/">Spicy-Aroma</Link>
                        <Link className='text-decoration-none' to="/blogs">Blogs</Link>
                       
                        <Link className='text-decoration-none px-3' to="/login">Login</Link>                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;