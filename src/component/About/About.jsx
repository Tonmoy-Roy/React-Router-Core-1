import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus exercitationem hic illo. Dolores deserunt quo exercitationem eius, cum esse sapiente consequatur quia error? Molestiae nemo possimus non amet accusamus nisi veniam ex laborum rerum, beatae, doloremque, sapiente hic ratione obcaecati nobis quisquam voluptate blanditiis odit unde suscipit laboriosam autem mollitia.</p>
            <Outlet></Outlet>
        </div>
    );
};

export default About;