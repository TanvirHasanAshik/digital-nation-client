import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Recommended = () => {
    const [recommendedData, setRecommendedData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recommendedBusinessData')
            .then(res => res.json())
            .then(data => setRecommendedData(data));
    }, [])

    return (
        <div className="container-fluid admin-container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5 pt-5">
                    <table class="text-center table table-hover table-dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Business Status</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Recommended</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendedData.map(recData =>
                                <tr>
                                    <td>{recData.name}</td>
                                    <td>{recData.businessStatus}</td>
                                    <td>{recData.email}</td>
                                    <td>{recData.contact}</td>
                                    <td>{recData.recommended}</td>
                                    <td>{recData.address}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Recommended;