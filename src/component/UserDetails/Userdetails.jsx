import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Userdetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h3>details about user : {user.name}</h3>
        </div>
    );
};

export default Userdetails;