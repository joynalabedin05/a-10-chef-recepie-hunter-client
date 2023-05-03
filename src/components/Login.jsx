import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider,getAuth, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';

const Login = () => {
    const [user, setUser] = useState('');
    const {signIn} = useContext(AuthContex);
   
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate  = useNavigate();
    const location = useLocation();
    // console.log(location);
    const from = location.state?.from?.pathname|| '/';

    const handleGoogleSignin =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loggedUser= result.user;
            // console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }
    const handleGoogleLogout =()=>{
        signOut(auth)
        .then(result=>{
            // console.log(result);
            setUser('');
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }
    const handleGithubSignin =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }

    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;      
        const email = form.email.value;        
        const password = form.password.value;
        // console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const loggedinUser = result.user;
            console.log(loggedinUser);
            navigate(from, {replace: true});
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
       <div>
        <div>
        <Container className='w-100 mt-5 mx-auto'>
            <h4>Please Login</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='w-50' type="email" name='email' placeholder="Enter email" required/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='w-50' type="password" name='password' placeholder="Password" required/>
                </Form.Group>         
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
            </Form>
        </Container>
        </div>
         <div className='container mt-5'>
            {
                user? <button className='btn btn-primary' onClick={handleGoogleLogout}>Logout</button> :
                <div>
                    <button className='btn btn-primary me-3' onClick={handleGoogleSignin}>Google Login</button>
                    <button className='btn btn-primary' onClick={handleGithubSignin}>Github Login</button>
                </div>
            }
                      
            {user&&
                <div>
                    <h1>User: {user.displayName}</h1>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
       </div>
    );
};

export default Login;