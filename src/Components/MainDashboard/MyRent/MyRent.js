import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { AllContext } from '../../../App';
import MyRentResponsive from '../MyRentResponsive/MyRentResponsive';
import Rents from '../Rents/Rents';
import './MyRent.css';

const MyRent = () => {
    const [signedUser, setSignedUser] = useContext(AllContext);
    const [userBooking, setUserBooking] = React.useState([]);

    useEffect(() => {
        fetch(`http://pure-inlet-20297.herokuapp.com/booking/?email=${signedUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserBooking(data)
            })
    }, []);


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
                    {
                        userBooking.map(booking => <Rents booking={booking} key={booking._id} />)
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyRent;