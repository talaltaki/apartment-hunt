import React, { useEffect, useState } from 'react';


import RentCard from '../Home/RentCard/RentCard';
import Title from '../Title/Title';

const HouseRent = () => {
  const [apartment, setApartment] = useState([]);
  useEffect(()=>{
      fetch('http://pure-inlet-20297.herokuapp.com/rent-house-collection')
      .then(res=> res.json())
      .then(data => setApartment(data))
  },[]);
    return (
        <main className="container py-4">
           <Title name="House Rent" title="Discover the latest Rent available today" />
            <div className="row">
                {
                    apartment.map(item=> <RentCard key={item._id} item={item}></RentCard>)
                }
            </div>
        </main>
    );
};

export default HouseRent;