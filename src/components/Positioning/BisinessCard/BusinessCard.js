import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const BusinessCard = ({ businessData, handleBusiness }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const {
        _id,
        title,
        description,
        price,
        topicOne,
        topicTwo,
        topicThree,
        topicFour

    } = businessData;
    return (
        <div data-aos="flip-left" className="cards col-md-3 text-center pt-5">
            <div data-aos="zoom-in">
                <div className='business-title'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h1>$ {price}</h1>
                </div>
                <div className="list text-start">
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {topicOne}</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {topicTwo}</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {topicThree}</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {topicFour}</p>
                </div>
                <button onClick={() => handleBusiness(_id)} className="btn findMoreBtn">Agree with us</button>
            </div>
        </div>
    );
};

export default BusinessCard;