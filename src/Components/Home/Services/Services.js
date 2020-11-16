import React from 'react';
import img1 from '../../../images/logos/apartment 1.png'
import img2 from '../../../images/logos/affordable 1.png'
import img3 from '../../../images/logos/lessee 1.png'
const Services = () => {
    return (
        <React.Fragment>
            <div className="container text-center mt-5">
                <p className="text-secondary font-weight-bold">Services</p>
                <h2 className="brand-text"> We're an agency tailored to all <br />
             Clients needs that always delivers</h2>

                <div className="row m-3 pt-5">
                    <div className="col-md-4">
                        <div className="service text-center p-3 m-2">
                            <img src={img1} alt="" className="img-fluid w-75" />
                            <h4 className="pt-3">Wide Range of Properties</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aperiam!</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service text-center p-3 m-2">
                            <img src={img2} alt="" className="img-fluid w-75" />
                            <h4 className="pt-3">Financing Made Easy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aperiam!</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service text-center p-3 m-2">
                            <img src={img3} alt="" className="img-fluid w-75" />
                            <h4 className="pt-3">Trusted By Thousands</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aperiam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Services;