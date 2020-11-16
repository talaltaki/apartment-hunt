import React from "react";

const Form = () => {
  return (
    <div className="card bg-light mt-4">
      <div className="card-body">
        <input
          className="form-control mt-3 rounded-0"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="form-control mt-4 rounded-0"
          type="text"
          placeholder="Phone No."
        />
        <input
          className="form-control mt-4 rounded-0"
          type="text"
          placeholder="Email Address"
        />
        <textarea
          className="form-control mt-4 rounded-0"
          type="text"
          placeholder="Message"
        />
        <button
          className="btn btn-lg btn-block text-white mt-4 mb-3 rounded-0"
          style={{ backgroundColor: "#46884D" }}
        >
          Request Booking
        </button>
      </div>
    </div>
  );
};

export default Form;
