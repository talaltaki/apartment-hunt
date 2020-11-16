import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import RentCard from '../Home/RentCard/RentCard';
import Title from '../Title/Title';

const HouseRent = () => {
    const [apartment, setApartment] = useState([]);
    useEffect(() => {
        fetch('http://pure-inlet-20297.herokuapp.com/rent-house-collection')
            .then(res => res.json())
            .then(data => setApartment(data))
    }, []);
    return (
        <main className="container py-4">
            <Title name="House Rent" title="Discover the latest Rent available today" />

            {
                apartment.length === 0 ? (
                    <div className="row d-flex justify-content-center p-5">
                        <Loader
                            type="Bars"
                            color="#275A53"
                            height={100}
                            width={100}
                        />
                    </div>) : (
                        <div className="row">
                            {
                                apartment.map(item => <RentCard key={item._id} item={item}></RentCard>)
                            }
                        </div>
                    )
            }

        </main>
    );
};

export default HouseRent;