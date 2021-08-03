import React from 'react';
import webIcon from '../../../image/web-design.png';
import socialIcon from '../../../image/social-media.png';
import investIcon from '../../../image/investment.png';
import { Link } from 'react-router-dom';
import ServicesData from '../ServicesData/ServicesData';

const serviceData = [
    {
        title: 'Web Design',
        descriptionOne: 'Showcase, dynamic and e-commerce websites.',
        descriptionTwo: 'Formulate your quote in 2 minutes',
        img: webIcon
    },
    {
        title: 'Social Media',
        descriptionOne: 'Strategy, content, management and advertising.',
        descriptionTwo: 'Monetize via the web.',
        img: socialIcon
    }
];
const Services = () => {
    return (
        <section className="services-container container">
            <div id="service" className="row mt-5 pt-5 text-white">
                <div className="col-md-12">
                    <h5>We solve problems</h5>
                    <h2>What can we do for you?</h2>
                </div>
            </div>
            <div className="row mt-5 pt-5">
                {
                    serviceData.map(service => <ServicesData service={service}></ServicesData>)
                }
                <div className="cards col-md-3 text-center">
                    <div className="card-img">
                        <img src={investIcon} alt="" />
                    </div>
                    <div>
                        <h4>Advertising campaigns</h4>
                        <p>Advertising campaigns on google and sites related to your business.</p>
                        <p>You only pay for what you consume.</p>
                        <Link className="findMoreBtn" to="/positioning">POSITIONING</Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;