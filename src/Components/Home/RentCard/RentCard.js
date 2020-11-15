import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
const RentCard = ({ item }) => {
    console.log(item)
    const { image, title, bathroom, bedroom, location, price } = item;
    return (
        <div className="col-9 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
                <div className="img-container" >
                    <img src={image} alt="product img" className="card-img-top" />
                </div>
                <div class="card-body pb-0">
                    <h5 class="card-title">{title}</h5>
    <p className="small mb-1"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>2</span>{location}</p>
                    <div className="d-flex justify-content-between ">
    <p className="small"><FontAwesomeIcon icon={faBed} /> <span>{bedroom}</span> Bedroom</p>
    <p className="small"><FontAwesomeIcon icon={faBath} /> <span>{bathroom}</span> Bathroom</p>

                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h3 className="align-self-center text-blue mb-0 font-weight-bolder text-title">$<span className="mr-1">{price}</span></h3>
                    <button className="btn common-btn rounded-0">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default RentCard;