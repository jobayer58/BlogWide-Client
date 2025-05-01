import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'><span className="loading loading-ring loading-xl"></span></div>
    }
    if (user && user?.email) {
        return children
    }


    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;