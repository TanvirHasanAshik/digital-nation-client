import React from 'react';
import Encouragement from '../../../image/Encouragement.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const qualityData = {
    title: 'Do you want to give your business an extra boost?',
    description: "Write us a few lines, let's keep in touch."
};
const BusinessEncouragement = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <section className='guaranteed-container'>
            <div className="container">
                <div className="row">
                    <div data-aos={'flip-right'} className="col-md-6 mt-5">
                        <h1>{qualityData.title}</h1>
                        <p className="mt-5">{qualityData.description}</p><br />
                        <Link className="findMoreBtn" to="/contacts">CONTACTS</Link>
                    </div>
                    <div data-aos="flip-left" className="col-md-6 mt-5 mb-5">
                        <img className="notice-img" style={{ width: '100%', height: '100%' }} src={Encouragement} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessEncouragement;