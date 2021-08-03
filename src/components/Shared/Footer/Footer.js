import React from 'react';
import { Link } from 'react-router-dom';
import fbIcon from '../../../image/facebook.png';
import instagramIcon from '../../../image/instagram.png';
import inIcon from '../../../image/linkedin.png';
const Footer = () => {
    return (
        <section className="footer container-fluid">
            <div className="container">
                <div className="row mt-5 pt-5 mb-5"> 
                    <div className="col-md-3">
                        <Link to="/home"><h5>DIGITAL NATION</h5></Link>
                    </div>
                    <div className="col-md-9">
                        <form className="d-flex">
                            <input type="email" class="form-control" placeholder="Enter Your Email" />
                            <button type="submit" class="btn btn-primary ">subscribe</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="row mt-5 text-center text-white">
                    <div className="col-md-3 social-icon">
                        <a href="">
                            <img src={fbIcon} alt="" />
                        </a>
                        <a href="">
                            <img src={instagramIcon} alt="" />
                        </a>
                        <a href="">
                            <img src={inIcon} alt="" />
                        </a>
                    </div>
                    <div className="col-md-6 mb-5">
                        <small>&copy; {(new Date().getFullYear())} all rights reserved - Digital Nation - via Muhammad Tanvir Hasan</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;