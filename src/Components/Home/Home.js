import React from 'react';
import Navbar from './../Navbar/Navbar'
import Banner from './../Banner/Banner'
import Footer from './Footer/Footer'
import HouseRent from '../HouseRent/HouseRent';
import Services from '../Services/Services';






const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <div style={{background: "#E5E5E5"}}>
                <HouseRent></HouseRent>
                <Services></Services>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;