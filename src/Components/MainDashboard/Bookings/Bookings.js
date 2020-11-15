import React from 'react';
import './Bookings.css';

const Bookings = () => {
    return (
        <>
            <div className="d-flex justify-content-center listings">
                <div>
                    <p className="text-center">House Name</p>
                </div>
                <div>
                    <p className="text-center">Price</p>
                </div>
                <div>
                    <p className="text-center">Price</p>
                </div>
                <div>
                    <p className="text-center">Price</p>
                </div>
                <div>
                    <p className="text-center"><button className="details-btn">View Details</button></p>
                </div>
            </div>
        </>
    );
};

export default Bookings;