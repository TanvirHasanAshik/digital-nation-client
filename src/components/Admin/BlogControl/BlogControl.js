import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BlogControl = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const [image, setImage] = useState(null);
    const [blogData, setBlogData] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);

    blogData.img = image;
    blogData.date = date;
    blogData.time = time;
    
    const handleBlur = (e) => {
        const newBlogData = { ...blogData };
        newBlogData[e.target.name] = e.target.value;
        setBlogData(newBlogData);
    }

    const handleChange = (e) => {
        const image = e.target.files[0];
        const imageData = new FormData();
        imageData.set('key', 'a74f2e068449953ad03af0dd22981935')
        imageData.append('image', image);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: imageData
        })
            .then(response => response.json())
            .then(image => setImage(image.data.url))
    }

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogData)
        })
            .then(res => {
                if (res) {
                    setSuccessMessage(true);
                    setInterval(() => { window.location.reload() }, 2000)
                }
            })

        e.preventDefault();
    }

    return (
        <div className="container-fluid admin-container text-white">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5 pt-5">
                    {successMessage && <h4>Blog Post Successfully Added</h4>}
                    <form onSubmit={handleSubmit} className="blog-form">
                        <div class="form-group pb-3">
                            <label>Title</label>
                            <input type="text" onBlur={handleBlur} name="title" class="form-control" required placeholder="Title here" />
                        </div>
                        <div class="form-group pb-3">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea name="description" onBlur={handleBlur} placeholder="Description Here" class="form-control" id="exampleFormControlTextarea1" rows="3" />
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

export default BlogControl;