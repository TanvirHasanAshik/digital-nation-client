import React from 'react';
import OnlinePresence from '../OnlinePresence/OnlinePresence';
import SocialProfileManagement from '../SocialProfileManagement/SocialProfileManagement';
import Header from '../Header/Header';
import GuaranteedQuality from '../GuaranteedQuality/GuaranteedQuality';
import Services from '../Services/Services';
import BusinessEncouragement from '../BusinessEncouragement/BusinessEncouragement';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <GuaranteedQuality></GuaranteedQuality>
            <OnlinePresence></OnlinePresence>
            <SocialProfileManagement></SocialProfileManagement>
            <Services></Services>
            <BusinessEncouragement></BusinessEncouragement>
            <Footer></Footer>
        </div>
    );
};

export default Home;