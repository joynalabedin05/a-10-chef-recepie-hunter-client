import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" />;
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
   
};

export default PrivateRoute;