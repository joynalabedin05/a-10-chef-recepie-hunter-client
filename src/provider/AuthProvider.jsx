import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContex = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
   const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
   }

   const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
   }
    const authInfo = {
        createUser,
        signIn,
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;