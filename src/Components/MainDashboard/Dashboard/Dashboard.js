import { faHome, faPlus, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AddRent from '../AddRent/AddRent';
import BookingList from '../BookingList/BookingList';
import MyRent from '../MyRent/MyRent';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="my-rent">
            <Row className="m-0">
                <Col className="p-0" sm={3}>
                    <div className="ml-md-5 mt-2">
                        <img height="70vh" src="https://i.ibb.co/X8BMJsF/Logo.png" alt="logo" />
                    </div>
                    <Nav variant="pills" className="flex-column ml-md-5 mt-md-5">
                        <Nav.Item>
                            <Nav.Link eventKey="booking-list"> <FontAwesomeIcon icon={faShoppingBasket} /> Booking List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="add-house"> <FontAwesomeIcon icon={faPlus} /> Add Rent House</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="my-rent"> <FontAwesomeIcon icon={faHome} /> My Rent</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col className="bg-gray p-0" sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="booking-list">
                            <BookingList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="add-house">
                            <AddRent />
                        </Tab.Pane>
                        <Tab.Pane eventKey="my-rent">
                            <MyRent />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Dashboard;


{/* <img src="https://i.ibb.co/BP4pDhk/affordable-1.png" alt="affordable-1" border="0">
<img src="https://i.ibb.co/1GZ0nWh/apartment-1.png" alt="apartment-1" border="0">
<img src="https://i.ibb.co/cLvTL6C/bath-1.png" alt="bath-1" border="0">
<img src="https://i.ibb.co/1KxD0xm/bed-1.png" alt="bed-1" border="0">
<img src="https://i.ibb.co/LCYgtn3/cloud-upload-outline-1.png" alt="cloud-upload-outline-1" border="0">
<img src="https://i.ibb.co/w4TghX5/Group-2.png" alt="Group-2" border="0">
<img src="https://i.ibb.co/rk5RXN1/Group-573.png" alt="Group-573" border="0">
<img src="https://i.ibb.co/1mtSCXC/Group-33351.png" alt="Group-33351" border="0">
<img src="https://i.ibb.co/MMJ9DQq/lessee-1.png" alt="lessee-1" border="0">
<img src="https://i.ibb.co/X8BMJsF/Logo.png" alt="Logo" border="0">
<img src="https://i.ibb.co/HByXyL7/map-marker-alt-solid-1.png" alt="map-marker-alt-solid-1" border="0">
<img src="https://i.ibb.co/4skrV2H/plus-1.png" alt="plus-1" border="0">
<img src="https://i.ibb.co/TgBwtDT/Vector.png" alt="Vector" border="0">
<img src="https://i.ibb.co/FHG5T3S/Vector-1.png" alt="Vector-1" border="0">
<img src="https://i.ibb.co/qd2Y2Tt/Vector-2.png" alt="Vector-2" border="0">
<img src="https://i.ibb.co/khsV7gT/Vector-3.png" alt="Vector-3" border="0"></img> */}