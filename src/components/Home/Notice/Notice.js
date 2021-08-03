import React from 'react';
import { Link } from 'react-router-dom';
import noticeImg from '../../../image/noticeImg.jpg';
const noticeData = {
    title: 'Get noticed by your customers',
    titleHeader: 'We place your site in first position in search engines',
    description: 'Thanks to a careful study of keywords, we position your site in the top positions of the search engine to ensure that users find you when they search for products and services offered by your company.',
    img: noticeImg
}
const Notice = () => {
    return (
        <section className="notice-container">
            <div className="row ">
                <div className="col-md-6 offset-1 notice m-5 p-5">
                    <h5>{noticeData.title}</h5>
                    <h2 className="mt-2">{noticeData.titleHeader}</h2>
                    <p className="mt-5">{noticeData.description}</p><br />
                    <Link className="findMoreBtn" to="/positioning">Find out more</Link>
                </div>
                <div className="col-md-4 m-5">
                    <img className="notice-img" style={{ width: '100%', height: '100%' }} src={noticeData.img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Notice;