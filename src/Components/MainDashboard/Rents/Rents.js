import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Rents.css'

const Rents = ({ booking }) => {
    const { price, title } = booking;
    console.log(booking)

    return (
        <>
            <Row className="m-0 listings">
                <Col xs={4}>
                    <p className="text-center">{title}</p>
                </Col>
                <Col xs={4}>
                    <p className="text-center">{price}</p>
                </Col>
                <Col xs={4}>
                    <p className="text-center"><button className="details-btn">View Details</button></p>
                </Col>
            </Row>
        </>
    );
};

export default Rents;