import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { fab, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex details">
                        <FontAwesomeIcon className="m-1 mr-2 social-icon" icon={faMapMarkerAlt} />
                        <div className="">
                            <p>H#340 (4th Floor), Road #24, </p>
                            <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                            <p>Phone: 018XXXXXXXX </p>
                            <p> E-mail: info@company.com</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h4 className="font-weight-bold">Company</h4>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/map" className="nav-link">Site Map</NavLink>
                        <NavLink to="/support" className="nav-link">Support Center</NavLink>
                        <NavLink to="/terms" className="nav-link">Terms Condition</NavLink>
                        <NavLink to="/submit" className="nav-link">Submit Listing</NavLink>
                    </div>
                    <div className="col-md-2">
                        <h4 className="font-weight-bold">Quick Links</h4>
                        <NavLink to="/quick-link" className="nav-link">Quick Link</NavLink>
                        <NavLink to="/rentals" className="nav-link">Rentals</NavLink>
                        <NavLink to="/sales" className="nav-link">Sales</NavLink>
                        <NavLink to="/contact" className="nav-link"> Contact</NavLink>
                        <NavLink to="/terms" className="nav-link">Terms Condition</NavLink>
                        <NavLink to="/blog" className="nav-link">Our Blogs</NavLink>
                    </div>
                    <div className="col-md-4">
                        <h4 className="font-weight-bold">About US</h4>
                        <p>We are the top real estate <br />
                        agency in Sydney, with agents <br />
                        available to answer any <br />
                        question 24/7.</p>
                        <div className="social">
                            <NavLink to="/facebook"> <FontAwesomeIcon className="social-icon" icon={faFacebook} /> </NavLink>
                            <NavLink to="/facebook"> <FontAwesomeIcon className="social-icon" icon={faInstagram} /> </NavLink>
                            <NavLink to="/facebook"> <FontAwesomeIcon className="social-icon" icon={faLinkedin} /> </NavLink>
                            <NavLink to="/facebook"> <FontAwesomeIcon className="social-icon" icon={faYoutube} /> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;