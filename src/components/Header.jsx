import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';

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
                        <Link className='text-decoration-none px-3' to="/">Home</Link>
                        <Link className='text-decoration-none' to="/">Spicy-Aroma</Link>
                        <Link className='text-decoration-none px-3' to="/blogs">Blogs</Link>

                        {user &&  <div>                      
                        <img style={{width:'30px'}} className=' me-2' src={user?.photoURL} alt="" />
                        <span className=''>{user?.displayName}</span>
                        </div> }

                        {user?  
                        <Button onClick={handleLogOut} variant="secondary">logout</Button>:
                        <Link to='/login'><Button variant="secondary">Login</Button></Link>
                        }
                       
                        {/* <Link className='text-decoration-none px-3' to="/login">Login</Link>                     */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;