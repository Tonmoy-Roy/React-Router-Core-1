import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>Welcome to User page</h3>
            <h3>User Data : {users.length}</h3>
            {/* useLoaderData(); ei function call dile internally users main.jsx er 'users' path er loader theke data peye jay */}
            {/* The "magic" happens through React Router's internal data management. */}

            <div className='gridi'>
                {
                    users.map(user => <User user={user}></User>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Users;