import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


const RentCard = ({ item }) => {
    const { convertedThumbnail, title, bathroom, bed, location, price, _id } = item;
    const history = useHistory();

    const handleViewDetails = (id) => {
        history.push(`/details/${id}`)
    };

    return (
        <div className="col-9 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
                <div className="img-container" >
                    <img src={`data:image/jpeg;base64,${convertedThumbnail.img}`} alt="product img" className="card-img-top" />
                </div>
                <div className="card-body pb-0">
                    <h5 className="card-title">{title}</h5>
                    <p className="small mb-1"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>{location}</span></p>
                    <div className="d-flex justify-content-between ">
                        <p className="small"><FontAwesomeIcon icon={faBed} /> <span>{bed}</span> Bedroom</p>
                        <p className="small"><FontAwesomeIcon icon={faBath} /> <span>{bathroom}</span> Bathroom</p>

                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h3 className="align-self-center text-blue mb-0 font-weight-bolder text-title">$<span className="mr-1">{price}</span></h3>
                    <button onClick={() => handleViewDetails(_id)} className="btn common-btn rounded-0">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default RentCard;
// src={`data:image/jpeg;base64,${image.img}`}