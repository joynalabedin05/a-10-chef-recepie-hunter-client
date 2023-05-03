import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = ()=>{

    }
    return (
        <div>
             <Container className='w-100 mt-5 mx-auto'>
                <h4>Please Register</h4>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='w-50' type="text" name='name' placeholder="Your Name" required/>          
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control className='w-50' type="text" name='photo' placeholder="Photo url" />          
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-50' type="email" name='email' placeholder="Enter email" required/>          
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-50' type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                                     
                    <Button variant="primary"
                    
                    type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                    Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                    
                    </Form.Text>
                    <Form.Text className="text-danger">
                    
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;