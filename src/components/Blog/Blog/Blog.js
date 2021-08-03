import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NaveBar from '../../Shared/NaveBar/NaveBar';
import BlogData from '../BlogData/BlogData';

const Blog = () => {
    const [blogInfo, setBlogInfo] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/blogData')
        .then(res => res.json())
        .then(data => setBlogInfo(data));

    },[])
    return (
        <div>
            <NaveBar></NaveBar>
            <div className="blog-container">
                 {blogInfo.map( blog=> <BlogData key={blog._id} blog={blog} />)}
            </div>
            

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Blog;