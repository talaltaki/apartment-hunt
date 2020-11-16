import React from 'react';
import Bookings from '../Bookings/Bookings';
import './BookingList.css';

const BookingList = () => {
    return (
        <React.Fragment>
            <h2 className="bg-white py-3">My Rent</h2>
            <div className="rent-area m-3 bg-white">
                <div className="p-3">
                    <div className="table-head d-flex no-wrap justify-content-center">
                        <div>
                            <h5 className="text-center">Name</h5>
                        </div>
                        <div>
                            <h5 className="text-center">Email ID</h5>
                        </div>
                        <div>
                            <h5 className="text-center">Phone No</h5>
                        </div>
                        <div>
                            <h5 className="text-center">Message</h5>
                        </div>
                        <div>
                            <h5 className="text-center">Status</h5>
                        </div>
                    </div>
                    {/* here I'll map when our backend wil be ready */}
                    <Bookings />
                </div>
            </div>
        </React.Fragment>
    );
};

export default BookingList;