import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessCard = ({ businessData, handleBusiness }) => {
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
        <div className="cards col-md-3 text-center pt-5">
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
            <button onClick={() =>handleBusiness(_id)} className="btn findMoreBtn">Agree with us</button>
        </div>
    );
};

export default BusinessCard;