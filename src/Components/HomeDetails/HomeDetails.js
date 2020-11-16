import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
// import Description from "./Description";
import Form from "./Form";
// import Images from "./Images";

const HomeDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = React.useState();

  useEffect(() => {
    fetch(`http://localhost:9999/details/${id}`)
      .then(response => response.json())
      .then(data => {
        setDetails(data);
        console.log(data)
      })
  }, [id]);



  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <br /> <br />
      <div className="container d-flex">
        <div className="row">
          <div className="col-md-8 col-12">
            <div>
              {/* <Images /> */}
              {/* <img src={`data:image/jpeg;base64,${details[0].convertedThumbnail.img}`} alt="" /> */}
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
    </React.Fragment>
  );
};

export default HomeDetails;
