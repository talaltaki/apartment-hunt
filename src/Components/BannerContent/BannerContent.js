import React from 'react';

const BannerContent = () => {
    return (
        <div >
            <h1 className="text-capitalize mb-4">FIND YOUR HOUSE RENT</h1>
            <form action="">
                <input placeholder="Search" type="text" className="input-search"/> <button className=" common-btn ml-2 ">Search</button>
            </form>
        </div>
    );
};

export default BannerContent;