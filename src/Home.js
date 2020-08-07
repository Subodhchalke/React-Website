import React from 'react';
import web from '../src/images/home.jpg';
import {NavLink} from 'react-router-dom';
import Common from '../src/Common';
  
const Home =() =>{
  return ( 
  <>
   <Common name="Grow your business with" 
            imgsrc={web} visit='/service' 
            btname="Get Started"
            p=" We are the talented devlopers making websites" />
    </>
    );
};


export default Home;