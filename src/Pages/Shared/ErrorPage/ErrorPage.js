import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const ErrorPage = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext)
    return (
        <div className='text-center flex justify-center items-center h-screen'>
            <div className='space-y-5'>
                <p className="text-red-500 text-5xl">Something Went Wrong!!!</p>
                <p className="text-red-400 text-3xl">{error.statusText || error.message}</p>
                <button className='btn btn-success' onClick={logOut}>Sign Out</button>
            </div>
        </div>
    );
};

export default ErrorPage;