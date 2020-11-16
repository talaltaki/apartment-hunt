import React from 'react';
import fakeData from '../../fakeData/fakeData';

import RentCard from '../Home/RentCard/RentCard';
import Title from '../Title/Title';

const HouseRent = () => {
  const apartment = fakeData
    return (
        <main className="container py-4">
           <Title name="House Rent" title="Discover the latest Rent available today" />
            <div className="row">
                {
                    apartment.map(item=> <RentCard key={item.id} item={item}></RentCard>)
                }
            </div>
        </main>
    );
};

export default HouseRent;