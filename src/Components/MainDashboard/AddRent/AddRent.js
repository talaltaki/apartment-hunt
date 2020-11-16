import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AddRent.css'

const AddRent = () => {
    const [houseInfo, setHouseInfo] = useState(null);

    const handleChange = (e) => {
        setHouseInfo({ ...houseInfo, [e.target.name]: e.target.value });
    }

    const handleThumbnail = (e) => {
        const thumbnail = e.target.files[0];
        setHouseInfo({ ...houseInfo, thumbnail: thumbnail });
    }

    const handleAddRent = (e) => {
        e.preventDefault();
        console.log(houseInfo)

        const readyInfo = new FormData();
        readyInfo.append('title', houseInfo.title);
        readyInfo.append('bed', houseInfo.bed);
        readyInfo.append('bathroom', houseInfo.bathroom);
        readyInfo.append('price', houseInfo.price);
        readyInfo.append('location', houseInfo.location);
        readyInfo.append('thumbnail', houseInfo.thumbnail);

        fetch('https://pure-inlet-20297.herokuapp.com/add-rent-houses', {
            method: 'POST',
            body: readyInfo
        })
            .then(res => {
                if (res.status === 200) {
                    alert('Success')
                }
            })
    };



    return (
        <React.Fragment>
            <h2 className="bg-white py-3">Add Rent House</h2>
            <div className="add-area m-5 bg-white">
                <div className="p-3">
                    <form onSubmit={handleAddRent}>
                        <Row className="m-0">
                            <Col xs={12} md={6}>
                                <label>
                                    Service Title <br />
                                    <input onChange={handleChange} type="text" name="title" placeholder="Enter Title" required />
                                </label> <br />
                                <label>
                                    No of Bed <br />
                                    <input onChange={handleChange} type="number" name="bed" placeholder="Enter No of Bed" required />
                                </label> <br />
                                <label>
                                    No of Bathroom <br />
                                    <input onChange={handleChange} type="number" name="bathroom" placeholder="Enter No of Bathroom" required />
                                </label>
                            </Col>
                            <Col xs={12} md={6}>
                                <label>
                                    Price <br />
                                    <input onChange={handleChange} type="number" name="price" placeholder="Enter Price" required />
                                </label> <br />
                                <label>
                                    Location <br />
                                    <input onChange={handleChange} type="text" name="location" placeholder="Enter Location" required />
                                </label> <br />
                                <label>
                                    Thumbnail <br />
                                    <span className="thumbnail-img d-flex justify-content-center align-items-center" > <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Thumbnail</span>
                                    <input className="thumbnail" type="file" name="thumbnail" onChange={handleThumbnail} required />
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