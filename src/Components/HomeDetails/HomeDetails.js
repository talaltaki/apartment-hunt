import React from "react";
import Description from "./Description";
import Form from "./Form";
import Images from "./Images";

const HomeDetails = () => {
  return (
    <div className="container d-flex">
      <div className="row">
        <div className="col-md-8 col-12">
          <div>
            <Images />
          </div>

          <div>
            <h1>Family Apartment Three</h1>
            <h4 className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus explicabo eaque sit minima error, perspiciatis,
              blanditiis in soluta numquam unde id molestias cumque. Architecto
              reprehenderit saepe aliquid alias eaque ea! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tenetur deserunt at,
              consequatur doloremque nobis perspiciatis rem omnis consequuntur
              culpa reprehenderit, esse ipsam voluptatibus illum dicta enim
              delectus iure voluptates. Quos?
            </h4>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
