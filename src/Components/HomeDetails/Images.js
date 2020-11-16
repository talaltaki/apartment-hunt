import React from "react";
import image1 from "./Rectangle 396.png";
import image2 from "./Rectangle 407.png";
import image3 from "./Rectangle 408.png";
import image4 from "./Rectangle 409.png";
import image5 from "./Rectangle 410.png";

const Images = () => {
  return (
    <div>
      <img src={image1} className="img-fluid px-2" alt="..." />
      <div className="mt-3">
        <img
          src={image2}
          className="img-fluid float-left w-25 px-2"
          alt="..."
        ></img>
        <img
          src={image3}
          className="img-fluid float-left w-25 px-2"
          alt="..."
        ></img>
        <img
          src={image4}
          className="img-fluid float-left w-25 px-2"
          alt="..."
        ></img>
        <img
          src={image5}
          className="img-fluid float-left w-25 px-2"
          alt="..."
        ></img>
      </div>
    </div>
  );
};

export default Images;
