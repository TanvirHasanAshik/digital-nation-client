import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NaveBar from '../../Shared/NaveBar/NaveBar';
import PositioningBusiness from '../PositioningBusiness/PositioningBusiness';
import PositioningHeader from '../PositioningHeader/PositioningHeader';

const Positioning = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <PositioningHeader></PositioningHeader>
            <PositioningBusiness></PositioningBusiness>
            <Footer></Footer>
        </div>
    );
};

export default Positioning;