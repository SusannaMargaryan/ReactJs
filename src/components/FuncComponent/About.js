import React from 'react';
import  logo1 from  '../../img/9.3.jpg';
import  logo2 from  '../../img/sea.jpg';
import  logo3 from  '../../img/9.2.jpg';
import {Carousel,Image} from 'react-bootstrap';
let About = function() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Image
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={logo3}
                    alt="third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
export default About
