import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ portfolio }) => {
    const { ProjectName, img, projectLink, tools } = portfolio;

    return (
        <div className="col-md-3 pt-5 cards">
            <div className="portfolio-img">
                <img src={img} alt="" />
            </div>
            <div className="pt-3">
                <h2>{ProjectName}</h2>
                <p>{tools}</p>
                <a href={projectLink} target="_blank" className="findMoreBtn pt-2">Go To Live</a>
            </div>
        </div>
    );
};

export default PortfolioCard;