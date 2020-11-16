import React from 'react';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="container">
                <div className="row justify-content-center m-3">
                    <div className="col-md-8 text-center pt-5">
                        <h1>FIND YOUR HOUSE RENT</h1> <br />
                        <div className="search-form d-flex justify-content-between">
                            <input type="text" className="form-control col-md-10 col-8" />
                            <button className="btn ml-2 brand-btn">Find Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;