import React from 'react';
import NaveBar from '../../Shared/NaveBar/NaveBar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <section class="header-container">
            <NaveBar></NaveBar>
            <HeaderMain></HeaderMain>
        </section>
    );
};

export default Header;