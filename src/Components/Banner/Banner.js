import React from 'react';
import BannerContent from '../BannerContent/BannerContent';
import './Banner.css';

const Banner = ({ title }) => {
    return (
        <section className="banner-main">
            <div className="banner-overly">
                <div className="banner-content text-white text-center">
                    <BannerContent title={title} />
                </div>
            </div>
        </section>
    );
};

export default Banner;