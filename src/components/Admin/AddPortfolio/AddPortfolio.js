import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddPortfolio = () => {
    const [portfolioData, setPortfolioData] = useState({});
    const [portfolioImage, setPortfolioImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(false);

    portfolioData.img = portfolioImage;

    const handleBlur = (e) => {
        const newPortfolio = {...portfolioData};
        newPortfolio[e.target.name] = e.target.value;
        setPortfolioData(newPortfolio);
    }
    const handleChange = (e) => {
        const image = e.target.files[0];
        const imageData = new FormData();
        imageData.set('key', 'a74f2e068449953ad03af0dd22981935');
        imageData.append('image', image);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            header : { 'Content-Type': 'application/json' },
            body: imageData
        })
        .then(response => response.json())
        .then(data => setPortfolioImage(data.data.url));
    }
    const handleSubmit = (e) => {
        fetch('https://mighty-reaches-13945.herokuapp.com/addPortfolio', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(portfolioData)
        })
        .then(res => {
            if(res){
                setSuccessMessage(true);
                setInterval(() => {window.location.reload()}, 2000)
            }
        })
        .catch(err => console.error(err))

        e.preventDefault()
    }

    return (
        <div className="container-fluid admin-container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5 pt-5 text-white">
                    {successMessage && <h2>Portfolio Added Successfully</h2>}
                    <form onSubmit={handleSubmit} className="blog-form">
                        <div class="form-group pb-3">
                            <label>Project Name</label>
                            <input type="text" onBlur={handleBlur} name="ProjectName" class="form-control" required placeholder="Project Name Here" />
                        </div>
                        <div class="form-group pb-3">
                            <label for="exampleFormControlTextarea1">Tools</label>
                            <input type="text" onBlur={handleBlur} name="tools" class="form-control" required placeholder="Project Tools Here" />
                        </div>
                        <div class="form-group pb-3">
                            <label for="exampleFormControlTextarea1">project Link</label>
                            <input type="url" onBlur={handleBlur} name="projectLink" class="form-control" required placeholder="Project Live Link Here" />
                        </div>
                        <div class="form-group pb-3">
                            <label for="exampleFormControlTextarea1">Upload Image</label>
                            <input type="file" name="uploadImage" onChange={handleChange} class="form-control" required />
                            <small> <b> ***Image size must be within 500 pixels***</b> </small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPortfolio;