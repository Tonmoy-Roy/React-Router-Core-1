import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h3>Welcome to Home</h3>
            <p>have a nice day !</p>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;