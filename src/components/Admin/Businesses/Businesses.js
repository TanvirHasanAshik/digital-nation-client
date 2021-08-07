import React, { useState } from 'react';

const Businesses = () => {
    const [businessData, setBusinessData] = useState({
        title: '',
        description: '',
        price: '',
        topicOne: '',
        topicTwo: '',
        topicThree: '',
        topicFour: ''
    })
    const handleBlur = (e) => {
        const newBusiness = { ...businessData };
        newBusiness[e.target.name] = e.target.value;
        setBusinessData(newBusiness);
    }

    const handleSubmit = (e) => {
        fetch('https://mighty-reaches-13945.herokuapp.com/businesses', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(businessData)
        })
            .then(response => {
                if (response) {
                    setInterval(() => {
                        window.location.reload();
                    }, 1000)
                }
            })
        e.preventDefault();
    }
    console.log(businessData);
    return (
        <section>
            <div className="text-white">
                <h3 className="text-white mt-5 ">Business Recommended.</h3><hr />
                <form onSubmit={handleSubmit} className="mb-5">
                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input onBlur={handleBlur} name="title" type="text" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Short Description</label>
                        <input onBlur={handleBlur} name="description" type="text" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Price</label>
                        <input onBlur={handleBlur} name="price" type="text" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Topic One</label>
                        <input onBlur={handleBlur} name="topicOne" type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Topic Two</label>
                        <input onBlur={handleBlur} name="topicTwo" type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Topic Three</label>
                        <input onBlur={handleBlur} name="topicThree" type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Topic Four</label>
                        <input onBlur={handleBlur} name="topicFour" type="text" class="form-control" />
                    </div>
                    <button type="submit" class="btn findMoreBtn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Businesses;