import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyRentResponsive from '../MyRentResponsive/MyRentResponsive';
import Rents from '../Rents/Rents';
import './MyRent.css';

const MyRent = () => {
    return (
        <React.Fragment>
            <h2 className="bg-white py-3">Booking List</h2>
            <div className="list-area m-3 bg-white">
                <div className="p-3 d-none d-lg-block">
                    <Row className="m-0 no-wrap table-head">
                        <Col xs={4}>
                            <h5 className="text-center">House Name</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-center">Price</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-center">Action</h5>
                        </Col>
                    </Row>
                    {/* here I'll map when our backend wil be ready */}
                    <Rents />
                </div>
                <div className="d-block d-lg-none">
                    <MyRentResponsive />
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyRent;