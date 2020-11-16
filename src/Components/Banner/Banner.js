import React from 'react';
import BannerContent from '../BannerContent/BannerContent';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner-main">
            <div className="banner-overly">
                <div className="banner-content text-white text-center">
              <BannerContent/>
                </div>
            </div>
        </section>
    );
};

export default Banner;