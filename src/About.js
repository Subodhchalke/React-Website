import React from 'react';
import web from '../src/images/about.jpeg';
import { NavLink } from 'react-router-dom';
import Common from '../src/Common';

const About = () => {
    return (
        <>
            <Common name="Welcome to About us" 
            imgsrc={web} visit='/contact' 
            btname="Contact now" 
            p=" We are the talented devlopers making websites 
                We are devloping Since 2018,
                we believe everyone deserves to have a website or online store. 
                Innovation and simplicity makes us happy: 
                our goal is to remove any technical or financial barriers that can prevent business owners from making their own website.
                 We're excited to help you on your journey!"/>
        </>
    );
};


export default About;