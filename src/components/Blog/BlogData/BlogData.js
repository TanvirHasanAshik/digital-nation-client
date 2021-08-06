import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BlogData = ({ blog }) => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    const { img, title, description, date, time } = blog
    return (
        <div className=" container-fluid">
            <div className="pt-5 pb-5">
                <div className="row d-flex justify-content-center">
                    <div data-aos="fade-up" data-aos-duration="3000" className="col-md-4 blog-img">
                        <h3 className='pb-3'>{title}</h3>
                        <img src={img} alt="" />
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="col-md-6 mt-5 pt-5">
                        <p><b>Post Date: {date}</b></p>
                        <p><b>Post Time: {time}</b></p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogData;