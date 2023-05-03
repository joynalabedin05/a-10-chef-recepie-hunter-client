import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    const {user,logOut} = useContext(AuthContex);
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    };
    return (
        <div className=''>         
            <Navbar className='py-4' bg="light" expand="lg">
                <Container>
                    <img className='me-1' style={{width: '30px'}} src="https://media.gettyimages.com/id/1141797007/vector/tablespoon-and-fork-vector.jpg?s=612x612&w=0&k=20&c=q0-5yhUREdnKZQRb0UkBmCLC3y3ISIiFeka5X9Qqbuc=" alt="" />
                    <Navbar.Brand href="#home"> <span className='text-danger'>SPICY</span>-<span className='text-primary'>Aroma</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                       <ActiveLink to='/'><span className='p-2'>Home</span></ActiveLink>
                       <ActiveLink to='/register'><span className='p-2'>Spicy-Aroma</span></ActiveLink>
                        <ActiveLink className='text-decoration-none px-3' to="/blogs"><span className='p-2'>Blogs</span></ActiveLink>

                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{user?.displayName}</Tooltip>}>
                            <span className="d-inline-block">
                               {
                                user &&  <img style={{width:'30px'}} className=' me-2' src={user?.photoURL} alt="" />
                               }
                            </span>
                        </OverlayTrigger>                    

                        {user?  
                        <Button onClick={handleLogOut} variant="secondary">logout</Button>:
                        <ActiveLink to='/login'><Button className='p-2' variant="secondary">Login</Button></ActiveLink>
                        }
                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;