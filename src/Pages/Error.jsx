import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error = () => {
    const error = useRouteError()
    
    return (
        <>
        <Navbar/>
        <div>{error.message}</div>
        <Footer/>
        </>
    );
};

export default Error;