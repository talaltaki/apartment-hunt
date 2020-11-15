import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faInstagramSquare, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-around mt-4">
                            <div>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>

                            <div className="address ">
                                <p className="my-0">H#340 (4th Floor), Road #24,</p>
                                <p className="my-0">New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                                <p className="my-0">Phone: 018XXXXXXXX</p>
                                <p className="my-0">E-mail: info@company.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mt-4">
                        <h5 >Company</h5>
                        <Link href="#" className="text-white d-block"> About</Link>
                        <Link href="#" className="text-white d-block">Support Center</Link>
                        <Link href="#" className="text-white d-block"> Terms Conditions</Link>
                        <Link href="#" className="text-white d-block">Submit Listing</Link>
                    </div>

                    <div className="col-md-2 mt-4">
                        <h5 >Quick Links</h5>
                        <Link href="#" className="text-white d-block"> Rentals</Link>
                        <Link href="#" className="text-white d-block">Contact</Link>
                        <Link href="#" className="text-white d-block"> Terms Conditions</Link>
                        <Link href="#" className="text-white d-block">Our blog</Link>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h5 >Quick Links</h5>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                        <div className="social-icon">
                            <Link href="#" className="text-white mx-2"><FontAwesomeIcon icon={faFacebookSquare}/></Link>
                            <Link href="#" className="text-white mx-2"><FontAwesomeIcon icon={faInstagramSquare}/></Link>
                            <Link href="#" className="text-white mx-2"><FontAwesomeIcon icon={faLinkedin}/></Link>
                            <Link href="#" className="text-white mx-2"><FontAwesomeIcon icon={faYoutube}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;