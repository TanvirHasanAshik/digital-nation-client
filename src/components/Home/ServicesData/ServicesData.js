import React from 'react';
import { Link } from 'react-router-dom';

const ServicesData = ({service}) => {
    return (
        <div className="cards col-md-3 text-center">
            <div className="card-img">
                <img src={service.img} alt="" />
            </div>
            <div>
                <h4>{service.title}</h4>
                <p>{service.descriptionOne}</p>
                <p>{service.descriptionTwo}</p>
                <Link className="findMoreBtn" to="/contacts">Contact Us</Link>
            </div>
        </div>
    );
};

export default ServicesData;