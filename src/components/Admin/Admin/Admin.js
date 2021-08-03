import React from 'react';
import Businesses from '../Businesses/Businesses';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="container-fluid admin-container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <Businesses></Businesses>
                </div>
            </div>
        </div>
    );
};

export default Admin;