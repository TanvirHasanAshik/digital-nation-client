import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NaveBar from '../../Shared/NaveBar/NaveBar';
import ContactForm from '../ContactForm/ContactForm';

const Contacts = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;