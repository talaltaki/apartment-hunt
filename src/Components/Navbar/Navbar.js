import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AllContext } from "../../App";
import Logo from "../../Logo.png";
const Navbar = () => {
  const history = useHistory();
  const [signedUser, setSignedUser] = useContext(AllContext);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <Link className="navbar-brand" to="/">
          <img className="w-25 img-fluid" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link " to="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="#">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">
                Concerns
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">
                Contact
              </Link>
            </li>
            <li className="">
              {signedUser.uid ? (
                <div className="d-flex align-items-center">
                  {signedUser.img && (
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        margin: "5px",
                        border: "2px solid #275a53",
                      }}
                      src={signedUser.img}
                      alt={signedUser.displayName}
                    />
                  )}
                  <button
                    className="signOut-btn"
                    onClick={() => setSignedUser({})}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                  <button
                    onClick={() => history.push("/login")}
                    className="btn common-btn ml-3"
                  >
                    Login
                  </button>
                )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


// import React, { useContext } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { AllContext } from '../../App';
// import Logo from '../../Logo.png';


// const Navbar = () => {
//   const history = useHistory();
//   const [loggedIn, setLoggedIn] = useContext(AllContext);
//   // console.log(loggedIn);

//   return (
//     <div className="container">
//       <nav className="navbar navbar-expand-lg  navbar-light">
//         <Link className="navbar-brand" to="/"><img className="w-25 img-fluid" src={Logo} alt="" /></Link>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <Link className="nav-link " to="#">Home <span className="sr-only">(current)</span></Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link " to="#">About</Link>
//             </li>
//             <li className="nav-item ">
//               <Link className="nav-link " to="#">Service</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link " to="#">Concerns</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link " to="#">Event</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link " to="#">Contact</Link>
//             </li>
//             <li className="">
//               {
//                 <button onClick={() => history.push('/login')} className="btn common-btn ml-3" >Login</button>
//               }
//             </li>

//           </ul>
//         </div>
//       </nav>
//     </div>

//   );
// };

// export default Navbar;