import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AddRent.css'

const AddRent = () => {
    return (
        <React.Fragment>
            <h2 className="bg-white py-3">Add Rent House</h2>
            <div className="add-area m-5 bg-white">
                <div className="p-3">
                    <form onSubmit={() => alert('hello')}>
                        <Row className="m-0">
                            <Col xs={6}>
                                <label>
                                    Service Title <br />
                                    <input type="text" name="title" placeholder="Enter Title" required />
                                </label> <br />
                                <label>
                                    No of Bed <br />
                                    <input type="number" name="bed" placeholder="Enter No of Bed" required />
                                </label> <br />
                                <label>
                                    No of Bathroom <br />
                                    <input type="number" name="bathroom" placeholder="Enter No of Bathroom" required />
                                </label>
                            </Col>
                            <Col xs={6}>
                                <label>
                                    Price <br />
                                    <input type="number" name="price" placeholder="Enter Price" required />
                                </label> <br />
                                <label>
                                    Location <br />
                                    <input type="text" name="location" placeholder="Enter Location" required />
                                </label> <br />
                                <label>
                                    Thumbnail <br />
                                    <span className="thumbnail-img d-flex justify-content-center align-items-center" > <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Thumbnail</span>
                                    <input className="thumbnail" type="file" required />
                                </label>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end"><button className="submit-btn" type="submit">Submit</button></div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    );
};

export default AddRent;