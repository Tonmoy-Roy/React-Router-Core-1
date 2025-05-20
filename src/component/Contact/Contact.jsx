import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const Contact = () => {
    const user1 = useLoaderData();
    return (
        <div>
            <h1>User Post : {user1.length}</h1>
            <h3>Contact Us</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eveniet omnis deserunt ea ipsam odio obcaecati velit blanditiis harum nihil cumque ipsum, voluptatem accusantium iusto iste ab aperiam impedit! Corporis pariatur sint quas culpa impedit, rerum rem hic animi consectetur.</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;