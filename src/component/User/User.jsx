import React from 'react';
import './User.css'
import { Link, Outlet } from 'react-router-dom';
const User = ({ user = {} }) => {
    return (
        <div className='shape2'>
            <h3>ID : {user.id}</h3>
            <p>name : {user.name}</p>
            <p>email : {user.email}</p>
            <Link to={`/user/${user.id}`}><button>Click</button></Link>
        </div>
    );
};

export default User;