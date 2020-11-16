import React from 'react';
import { Form } from 'react-bootstrap';
import './Bookings.css';

const Bookings = () => {
    const stateStyle = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    }
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
                    <Form.Control style={stateStyle} as="select" defaultValue="Pending">
                        <option>Pending</option>
                        <option>On Going</option>
                        <option>Done</option>
                    </Form.Control>
                </div>
            </div>
        </>
    );
};

export default Bookings;