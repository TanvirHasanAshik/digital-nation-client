import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BusinessCard from '../BisinessCard/BusinessCard';

const PositioningBusiness = () => {

    const [businessData, setBusinessData] = useState([]);

    useEffect(() => {
        fetch('https://mighty-reaches-13945.herokuapp.com/businessData')
            .then(response => response.json())
            .then(resData => setBusinessData(resData));
    }, [])

    const history = useHistory();
    const handleBusiness = (id) => {
        history.push(`/business/recommended/${id}`);
        console.log(id)
    }
    return (
        <section className="guaranteed-container container-fluid">
            <div className="row pt-5 d-flex justify-content-center">
                {
                    businessData.map(businessData =>
                        <BusinessCard
                            key={businessData._id}
                            businessData={businessData}
                            handleBusiness={handleBusiness}
                        />)
                }
            </div>
        </section>
    );
};

export default PositioningBusiness;