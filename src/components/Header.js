import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from "../assets/logo.PNG";

function Header() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
      <div className="container-fluid px-4 py-1 m-0">
        <Link to="/" className="navbar-brand fw-bold"><img src={Image} className="header-logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/important_dates" className="nav-link">Important Dates</Link>
            </li>
            <li className="nav-item">
              <Link to="/organization_committee" className="nav-link">Organization Committee</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;