import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NaveBar from '../../Shared/NaveBar/NaveBar';


const BusinessPayment = () => {
    const { id } = useParams();
    const [businessInfo, setBusinessInfo] = useState({});
    const [clientInfo, setClientInfo] = useState({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://mighty-reaches-13945.herokuapp.com/businessRecommended/${id}`)
            .then(response => response.json())
            .then(data => setBusinessInfo(data))

    }, [id]);

    const handleBlur = (e) => {
        const newClient = { ...clientInfo };
        newClient[e.target.name] = e.target.value;
        newClient.businessStatus = businessInfo.description;
        setClientInfo(newClient);
    }
    const handleSubmit = (e) => {
        fetch('https://mighty-reaches-13945.herokuapp.com/recommendedBusinessData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientInfo)
        })
            .then(response => {
                if (response) {
                    setSuccess(true);
                    setInterval(() => {
                        window.location.reload();
                    }, 2000)
                }
            })
        e.preventDefault();
    }

    return (
        <div className='business-payment-container'>
            <NaveBar></NaveBar>
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-sm-12 mt-5 pt-5">
                    {success && <p className="successMassage">Your Business Information Send Successfully</p>}
                    <form onSubmit={handleSubmit} className="mt-2 pb-5">
                        <div class="form-group pb-3">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" onBlur={handleBlur} placeholder="Enter Your Name" required />
                        </div>
                        <div class="form-group pb-3">
                            <label>Email</label>
                            <input type="text" name="email" class="form-control" onBlur={handleBlur} placeholder="Enter Your Email" required />
                        </div>
                        <div class="form-group pb-3">
                            <label>Contact Number</label>
                            <input type="text" name="contact" class="form-control" onBlur={handleBlur} placeholder="Enter Your Contact Number" required />
                        </div>
                        <div class="form-group pb-3">
                            <label>Recommended businesses</label>
                            <input type="text" name="recommended" class="form-control" onBlur={handleBlur} placeholder="Enter Your opinion" required />
                        </div>
                        <div class="form-group pb-3">
                            <label>Address</label>
                            <input type="text" name="address" class="form-control" onBlur={handleBlur} placeholder="Enter Your address" required />
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BusinessPayment;