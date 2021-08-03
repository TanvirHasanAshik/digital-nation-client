import React, { useState } from 'react';
import phoneIcon from '../../../image/smartphone.png';
import planeIcon from '../../../image/paper-plane.png';

const ContactForm = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const [message, setMessage] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);

    message.date = date;
    message.time = time;

    const handleBlur = (e) => {
        const newMessage = { ...message };
        newMessage[e.target.name] = e.target.value;
        setMessage(newMessage);
    }

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/clientMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        })
            .then(response => {
                if (response) {
                    setSuccessMessage(true);
                    setInterval(() => {
                        window.location.reload();
                    }, 1000)
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container-fluid contact-form-container">
            <div className="row">
                {successMessage && <p className=" text-success text-center pt-5">Message Send Successfully</p>}
                <div className="d-flex justify-content-center col-md-6 mt-5 pt-5">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div class="form-group pb-3">
                            <input onBlur={handleBlur} name="name" type="text" class="form-control" placeholder="Name" required />
                        </div>
                        <div class="form-group pb-3">
                            <input onBlur={handleBlur} name="email" type="text" class="form-control" placeholder="Email" required />
                        </div>
                        <div class="form-group pb-3">
                            <textarea onBlur={handleBlur} name="message" rows="4" cols="32" placeholder="Wright About Something" required />
                        </div>
                        <button type="submit" class="btn btn-primary"> Submit </button>
                    </form>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <h4>Call us, write to us, or come and visit us</h4><br />
                    <h2>We will be happy to meet you and hear everything about your business</h2><br />
                    <h5>Saturday and Sunday: Closed</h5><br />
                    <h5>Date: {date}</h5>
                </div>
            </div>
            <div className="row mt-5 pt-5 pb-5 d-flex justify-content-center">
                <div className="col-md-5 cards text-center">
                    <div className="card-img">
                        <img src={phoneIcon} alt="" />
                    </div>
                    <div>
                        <h3>Call us</h3>
                        <p>01550005114 <span style={{ color: 'black' }} >or</span> 01970005114</p>
                    </div>
                </div>
                <div className="col-md-5 cards text-center">
                    <div className="card-img">
                        <img src={planeIcon} alt="" />
                    </div>
                    <div>
                        <h3>Service</h3>
                        <p>tanvirashik41@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;