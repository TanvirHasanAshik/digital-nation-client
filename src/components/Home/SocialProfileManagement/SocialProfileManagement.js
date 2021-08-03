import React from 'react';
import { Link } from 'react-router-dom';
import managementImg from '../../../image/managementImg.jpg';
const profileManagementData = {
    title: 'Social Profile Management',
    titleHeader: 'We increase your visibility on social networks',
    description: 'We promote your business on social media by formulating an editorial plan for the weekly publication of posts and stories. We increase your followers and turn them into customers for your business.'
};
const SocialProfileManagement = () => {
    return (
        <section className='presence-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h5>{profileManagementData.title}</h5>
                        <h2 className="mt-2">{profileManagementData.titleHeader}</h2>
                        <p className="mt-5">{profileManagementData.description}</p><br />
                        <Link className="findMoreBtn" to="/contacts" >Contact for Information</Link>
                    </div>
                    <div className="col-md-6 mt-5 mb-5">
                        <img className="notice-img" style={{ width: '100%', height: '100%' }} src={managementImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProfileManagement;