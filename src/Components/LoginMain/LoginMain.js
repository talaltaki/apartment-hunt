import React from 'react';
import Login from '../Login/Login';
import Navbar from './../Navbar/Navbar'
const LoginMain = () => {
    return (
        <main className="container">
            <Navbar/>
            <Login/>
        </main>
    );
};

export default LoginMain;