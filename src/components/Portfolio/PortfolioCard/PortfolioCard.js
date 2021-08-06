import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PortfolioCard = ({ portfolio }) => {
    const { ProjectName, img, projectLink, tools } = portfolio;
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <div data-aos="flip-left" className="col-md-3 pt-5 cards">
            <div data-aos="zoom-in" className="portfolio-img">
                <img src={img} alt="" />
            </div>
            <div data-aos="zoom-in" className="pt-3">
                <h2>{ProjectName}</h2>
                <p>{tools}</p>
                <a href={projectLink} target="_blank" className="findMoreBtn pt-2">Go To Live</a>
            </div>
        </div>
    );
};

export default PortfolioCard;