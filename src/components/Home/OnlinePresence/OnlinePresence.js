import React from 'react';
import { Link } from 'react-router-dom';
import presenceImg from '../../../image/presenceImg.jpg';
const presenceData = {
    title: 'We increase your online presence',
    titleHeader: 'Take advantage of the potential of the web, with us.',
    description: 'We are an Italian web agency specializing in strategic consulting aimed at increasing online visibility. We help entrepreneurs, companies and individuals every day to be present online, to find new customers and to promote their products in the best possible way.'
};
const OnlinePresence = () => {
    return (
        <section className='presence-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                        <img className="notice-img" style={{ width: '100%', height: '100%' }} src={presenceImg} alt="" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h5>{presenceData.title}</h5>
                        <h2 className="mt-2">{presenceData.titleHeader}</h2>
                        <p className="mt-5">{presenceData.description}</p><br />
                        <a className="findMoreBtn" href="#service">find our service</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlinePresence;