import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ServicesData = ({service}) => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <div className="cards col-md-3 text-center">
            <div data-aos={'fade-left'} className="card-img">
                <img src={service.img} alt="" />
            </div>
            <div data-aos={'fade-right'}>
                <h4>{service.title}</h4>
                <p>{service.descriptionOne}</p>
                <p>{service.descriptionTwo}</p>
                <Link className="findMoreBtn" to="/contacts">Contact Us</Link>
            </div>
        </div>
    );
};

export default ServicesData;