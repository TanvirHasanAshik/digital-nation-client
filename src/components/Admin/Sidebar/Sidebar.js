import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faEnvelope, faHome, faLaptopCode, faMoneyCheckAlt, faSignOutAlt, faTachometerAlt, faTools, faWallet } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <section className="sidebar-container mb-0">
            <div className="side-nav m-5 ">
                <Link to="/home"><FontAwesomeIcon icon={faHome} /> HOME</Link>
                <Link to="/admin"><FontAwesomeIcon icon={faTachometerAlt} /> DASHBOARD</Link>
                <Link to="/addPortfolio"><FontAwesomeIcon icon={faLaptopCode} /> ADD PORTFOLIO</Link>
                <Link to="/recommended"><FontAwesomeIcon icon={faWallet} /> RECOMMENDED</Link>
                <Link to="/message"><FontAwesomeIcon icon={faEnvelope} /> MESSAGE</Link>
                <Link to="/payment"><FontAwesomeIcon icon={faMoneyCheckAlt} /> PAYMENT</Link>
                <Link to="/blog"><FontAwesomeIcon icon={faBlog} /> BLOG</Link>
                <Link to="/services"><FontAwesomeIcon icon={faTools} /> SERVICES</Link>
                <Link to="/logout" className="pt-5 mt-5"><FontAwesomeIcon icon={faSignOutAlt} /> LOG OUT</Link>
            </div>
        </section>
    );
};

export default Sidebar;