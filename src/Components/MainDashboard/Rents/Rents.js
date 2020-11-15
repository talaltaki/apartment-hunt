import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Rents.css'

const Rents = () => {
    return (
        <>
            <Row className="m-0 listings">
                <Col xs={4}>
                    <p className="text-center">House Name</p>
                </Col>
                <Col xs={4}>
                    <p className="text-center">Price</p>
                </Col>
                <Col xs={4}>
                    <p className="text-center"><button className="details-btn">View Details</button></p>
                </Col>
            </Row>
        </>
    );
};

export default Rents;