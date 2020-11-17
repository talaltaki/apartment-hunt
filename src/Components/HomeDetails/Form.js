import React from "react";
import { useForm } from "react-hook-form";


const Form = ({ houseInfo }) => {
  const { register, handleSubmit, errors } = useForm();

  const { title, price } = houseInfo;


  const onSubmit = (data, e) => {

    const bookingData = { ...data, title, price };
    // console.log(bookingData);

    fetch(`https://pure-inlet-20297.herokuapp.com/add-bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    })
      .then(res => {
        if (res.status === 200) {
          alert('submitted');
          e.target.reset();
        }
      })


  };



  return (
    <div className="card bg-light mt-4">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} >
          <input
            className="form-control mt-3 mb-2 rounded-0"
            type="name" name="name" ref={register({ required: true })}
            placeholder="Full Name"
          />
          {/* <br /> */}
          {errors.name && <span className="text-danger">Name is required</span>}

          <input
            className="form-control  mb-2 rounded-0"
            type="text" name="phone"
            placeholder="Phone No."
            ref={register({ required: true })}
          />
          {errors.phone && <span className="text-danger">Phone is required</span>}

          <input
            className="form-control mb-2 rounded-0"
            placeholder="Email Address"
            type="email" name="email" ref={register({ required: true })}
          />
          {errors.email && <span className="text-danger ">Email is required</span>}
          {/* value={loggedInUser.email} */}

          <textarea
            className="form-control  rounded-0"
            type="text"
            placeholder="Message"
            name="message"
            ref={register({ required: true })}
          />
          {errors.message && <span className="text-danger ">Message is required</span>}


          <button type="submit"
            className="btn btn-lg btn-block text-white mt-4 mb-3 rounded-0"
            style={{ backgroundColor: "#46884D" }}
          >
            Request Booking
        </button>
        </form>

      </div>
    </div>
  );
};

export default Form;


// import React from "react";

// const Form = () => {
//   return (
//     <div className="card bg-light mt-4">
//       <div className="card-body">
//         <input
//           className="form-control mt-3 rounded-0"
//           type="text"
//           placeholder="Full Name"
//         />
//         <input
//           className="form-control mt-4 rounded-0"
//           type="text"
//           placeholder="Phone No."
//         />
//         <input
//           className="form-control mt-4 rounded-0"
//           type="text"
//           placeholder="Email Address"
//         />
//         <textarea
//           className="form-control mt-4 rounded-0"
//           type="text"
//           placeholder="Message"
//         />
//         <button
//           className="btn btn-lg btn-block text-white mt-4 mb-3 rounded-0"
//           style={{ backgroundColor: "#46884D" }}
//         >
//           Request Booking
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form;
