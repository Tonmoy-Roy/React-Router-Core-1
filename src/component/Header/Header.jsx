import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            {/* <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a> */}
                <Link to="/" className='shape'>Home</Link>
                <Link to="/users" className='shape'>Users</Link>
                <Link to="/about" className='shape'>About Us</Link>
                <Link to="/contact" className='shape'>Contact Us</Link>
        </div>
    );
};

export default Header;