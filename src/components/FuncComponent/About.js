import React from 'react';
import logo1 from '../../img/sea.jpg';
import  logo2 from  '../../img/9.1.jpg';
import  logo3 from  '../../img/9.2.jpg';
import  '../../App.css';
let About = function() {
    return (
        <div className="about">
            <img src={logo1} alt="Logo"/>
            <img src={logo2} alt="Logo"/>
            <img src={logo3} alt="Logo"/>
        </div>
    );
}
export default About
