import React from 'react';
import fakeServiceData from '../../fakeData/fakeServiceData';
import ServicesCard from '../Home/ServicesCard/ServicesCard';
import Title from '../Title/Title';

const Services = () => {
    const serviceData = fakeServiceData;
    console.log(serviceData)
    return (
        <section className="container py-4">
            <Title name="Service" title="We're an agency tailored to all clients' needs that always delivers" />

            <div className="row">
            {
                serviceData.map(item=> <ServicesCard item={item} key={item.id}></ServicesCard>)
            }
            </div>
        </section>
    );
};

export default Services;