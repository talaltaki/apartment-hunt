import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo.png'
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <Link className="navbar-brand" to="/"><img className="w-25 img-fluid" src={Logo} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link " to="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">About</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="#">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">Concerns</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">Event</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">Contact</Link>
            </li>
            <li className="">
              <button className="btn common-btn ml-3" >Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;