import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Room1 from './Rectangle 410.png';
import Room2 from './Rectangle 409.png';
import Room3 from './Rectangle 408.png';
import Room4 from './Rectangle 407.png';
import Form from "./Form";

const HomeDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://pure-inlet-20297.herokuapp.com/rent-house-collection')
      .then(res => res.json())
      .then(result => setData(result))
  }, [])

  if (data.length === 0) {
    return null;
  }

  const house = data.find(item => item._id === id);
  console.log(house.bed)
  const { bed, bathroom, price, title, convertedThumbnail } = house;


  return (
    <React.Fragment>
      <Navbar />
      <Banner title="details" />
      <br /> <br />
      <div className="container d-flex">
        <div className="row">
          <div className="col-md-8 col-12">
            <div>
              <img className="img-fluid " src={`data:image/jpeg;base64,${convertedThumbnail.img}`} alt="" />
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img src={Room1} className=" img-fluid" alt="" />
              </div>
              <div className="col-3">
                <img src={Room2} className="img-fluid" alt="" />
              </div>
              <div className="col-3">
                <img src={Room3} className="img-fluid" alt="" />
              </div>
              <div className="col-3">
                <img src={Room4} className="img-fluid" alt="" />
              </div>

            </div>
            <div className="d-flex justify-content-between my-2 mt-4">
              <h2 className="text-big font-weight-bolder">{title}</h2>
              <h2 className="text-big font-weight-bolder">${price}</h2>
            </div>
            <p className="mb-4">3000 sq-ft., <span>{bed}</span> Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>


            <div className=" my-4 ">
              <h2 className="text-big font-weight-bolder">Price Details-</h2>
              <p className="mb-0">Rent/Month: $550 (negotiable)</p>
              <p className="mb-0">Flat Release Policy : 3 months earlier notice required</p>
            </div>
            <div className=" my-4 ">
              <h2 className="text-big font-weight-bolder">Property Details-</h2>
              <p className="mb-0">Rent/Month: $550 (negotiable)</p>
              <p className="mb-0">Flat Release Policy : 3 months earlier notice required</p>
              <p className="mb-0">Flat Size : 3000 Sq Feet.</p>
              <p className="mb-0">Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
              <p className="mb-0">Room Category : <span>{bed}</span> Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
              <p className="mb-0">Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>

              <p className="mb-0">Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
            </div>

          </div>
          <div className="col-md-4 col-12">
            <Form houseInfo={house} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeDetails;


// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Banner from "../Banner/Banner";
// import Navbar from "../Navbar/Navbar";
// // import Description from "./Description";
// import Form from "./Form";
// // import Images from "./Images";

// const HomeDetails = () => {
//   const { id } = useParams();

//   const [details, setDetails] = React.useState();

//   useEffect(() => {
//     fetch(`http://localhost:9999/house-details/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setDetails(data);
//       })
//   }, []);

//   // const { title, price, bed, convertedThumbnail, bathroom, _id } = details;


//   // useEffect(() => {
//   //   fetch(`http://pure-inlet-20297.herokuapp.com/rent-house-collection`)
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       const singleHouse = data.find(item => id === item._id);
//   //       if (singleHouse !== undefined) {
//   //         setSingleHouseDetails(singleHouse);
//   //         console.log(singleHouse, singleHouseDetails)
//   //       }
//   //     })
//   // }, []);



//   // useEffect(() => {
//   //   if (details) {
//   //     const singleHouse = details.find(item => id === item._id);
//   //     setSingleHouseDetails(singleHouse)
//   //   }
//   // }, []);



//   return (
//     <React.Fragment>
//       <Navbar />
//       <Banner />
//       <br /> <br />
//       <div className="container d-flex">
//         <div className="row">
//           <div className="col-md-8 col-12">
//             <div>
//               {/* <Images /> */}
//               {/* <img src={`data:image/jpeg;base64,${convertedThumbnail.img}`} alt="" /> */}
//             </div>
//             <div>
//               <h1>Family Apartment Three</h1>
//               <h4 className="text-secondary">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Necessitatibus explicabo eaque sit minima error, perspiciatis,
//                 blanditiis in soluta numquam unde id molestias cumque. Architecto
//                 reprehenderit saepe aliquid alias eaque ea! Lorem ipsum dolor sit
//                 amet consectetur adipisicing elit. Tenetur deserunt at,
//                 consequatur doloremque nobis perspiciatis rem omnis consequuntur
//                 culpa reprehenderit, esse ipsam voluptatibus illum dicta enim
//                 delectus iure voluptates. Quos?
//             </h4>
//             </div>
//           </div>
//           <div className="col-md-4 col-12">
//             <Form />
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default HomeDetails;
