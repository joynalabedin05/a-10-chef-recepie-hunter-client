import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider,getAuth, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';

const Login = () => {
    const [user, setUser] = useState('');
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
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
    return (
        <div className='container mt-5'>
            {
                user? <button onClick={handleGoogleLogout}>Logout</button> :
                <div>
                    <button onClick={handleGoogleSignin}>Google Login</button>
                    <button onClick={handleGithubSignin}>Github Login</button>
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
    );
};

export default Login;