import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContex);
    const [error, setError]=useState('');

    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        if(password.length<6){
            return setError('Password must be 6 characters');
        }

        createUser(email,password)
        .then(result=>{
            const createdUser= result.user;
            console.log(createdUser);
        })
        .catch(error=>{
            console.error(error);
        })

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
                    <Form.Text className="text-danger">
                        <h3>{error}</h3>
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;