import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NaveBar from '../../Shared/NaveBar/NaveBar'; import PortfolioCard from '../PortfolioCard/PortfolioCard';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/portfolioData')
            .then(res => res.json())
            .then(resData => setPortfolio(resData));
    }, []);

    return (
        <div>
            <NaveBar></NaveBar>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center blog-container">
                    {
                        portfolio.map(p => <PortfolioCard key={p._id} portfolio={p} />)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;