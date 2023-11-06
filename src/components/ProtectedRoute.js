import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({viewpage}) => {
    const isAuthenticated = localStorage.getItem("email")

    if(!isAuthenticated) {
        return <Navigate to="/login" />
    }
 return viewpage;
};

export default ProtectedRoute;
