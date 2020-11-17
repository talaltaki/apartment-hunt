import React from 'react';
import { Form } from 'react-bootstrap';
import './Bookings.css';

const Bookings = ({ singleHouse }) => {
    const { title, price, _id, email, name, phone, message } = singleHouse;

    const stateStyle = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    }
    return (
        <>
            <div className="d-flex justify-content-center listings">
                <div>
                    <p className="text-center">{name}</p>
                </div>
                <div>
                    <p className="text-center">{email}</p>
                </div>
                <div>
                    <p className="text-center">{phone}</p>
                </div>
                <div>
                    <p className="text-center">{message}</p>
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