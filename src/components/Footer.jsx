import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark'>
           <div className='container text-white pt-5 d-flex justify-content-between gap-5'>
                <div>
                    <h3>About Us</h3>
                    <div>
                    <img className='me-1 my-3' style={{width: '30px'}} src="https://media.gettyimages.com/id/1141797007/vector/tablespoon-and-fork-vector.jpg?s=612x612&w=0&k=20&c=q0-5yhUREdnKZQRb0UkBmCLC3y3ISIiFeka5X9Qqbuc=" alt="" />
                    <Navbar.Brand href="#home"> <span className='text-danger'>SPICY</span>-<span className='text-primary'>Aroma</span></Navbar.Brand>
                    </div>
                    <p>Amazingly creamy, saucy chickpea <br /> curry served over rice with a dollop of chili crisp and <br /> a side of cucumber salad. Ready in 20 minutes!</p>
                                      
                </div>
                <div>
                    <h3>Important Links</h3>
                    <div className='mt-3'>
                        <a className='text-decoration-none text-warning' href='#'>Home</a> <br />
                        <a className='text-decoration-none text-warning' href='#'>Team</a> <br />
                        <a className='text-decoration-none text-warning' href='#'>Contact</a> <br />
                        <a className='text-decoration-none text-warning' href='#'>Blogs</a> <br />
                        <a className='text-decoration-none text-warning' href='#'>Login</a>
                    </div>
                </div>
                <div>
                    <h3>Opening Time</h3>                  
                    <div className='mt-4'>
                        <span>Monday-wednesday</span>
                        <p className='text-warning'>10am-9pm</p>
                    </div>
                    <div>
                        <span>Monday-wednesday</span>
                        <p className='text-warning'>10am-9pm</p>
                    </div>                                    
                </div>
                <div>
                    <h3>Working Info</h3>
                    <p className='text-warning'>+1800800666</p>
                    <h4>Follow Us On:</h4>
                </div>
                
           </div>
           <div className='container text-white pt-4 pb-5'>
            <hr />
            <h5 className='text-center mt-4'>Copyrights @2023 All rights reserved Developed By <span className='text-warning'>Spicy-Aroma</span></h5>
           </div>
          
        </div>
    );
};

export default Footer;