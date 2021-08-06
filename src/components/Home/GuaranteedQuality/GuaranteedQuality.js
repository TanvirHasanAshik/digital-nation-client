import React from 'react';
import guaranteedImg from '../../../image/GuaranteedQualityImg.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const qualityData = {
    title: 'guaranteed quality',
    titleHeader: 'Customer Center',
    description: 'We begin a journey together with the customer that leads us to analyze all the ways necessary to achieve the required objectives.'
};
const GuaranteedQuality = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <section className='guaranteed-container '>
            <div className="container ">
                <div className="row" >
                    <div data-aos={"zoom-in-left"} className="col-md-6 mt-5 mb-5">
                        <img className="notice-img" style={{ width: '100%', height: '100%' }} src={guaranteedImg} alt="" />
                    </div>
                    <div data-aos={'zoom-in-right'} className="col-md-6 mt-5">
                        <h5>{qualityData.title}</h5>
                        <h2 className="mt-2">{qualityData.titleHeader}</h2>
                        <p className="mt-5">{qualityData.description}</p><br />
                        <Link className="findMoreBtn" to="/portfolio">Go to Portfolio</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuaranteedQuality;