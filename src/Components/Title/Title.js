import React from 'react';

const Title = ({name, title}) => {
    return (
        <div className="row">
        <div className="col-md-6 offset-md-3 text-center ">
    <h5 className="text-title">{name}</h5>
            <h1 className="font-weight-bolder text-big mb-5">Discover the latest Rent available today</h1>
        </div>
    </div>
    );
};

export default Title;