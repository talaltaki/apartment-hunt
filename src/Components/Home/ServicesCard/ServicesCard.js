import React from 'react';

const ServicesCard = ({ item }) => {
    const { img, name, info } = item;
    return (
        <div className="col-9 mx-auto col-md-6 col-lg-4 my-3 text-center">
            <div className="img-container mb-3" >
                <img src={img} alt="product img" className="img-fluid w-25" />
            </div>
            <h5 class="card-title">{name}</h5>
            <p>{info}</p>
        </div>
    );
};

export default ServicesCard;