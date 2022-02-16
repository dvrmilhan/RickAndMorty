import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
      <Link to="/" className="fs-1 helve navbar-brand">Rick  
        <span className="text-warning"> & </span>  Morty 
      </Link>
        <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
            <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
            <i className="fas fa-bars open text-dark"></i>
            <i className="fas fa-times close text-dark"></i>
        </button>
        
        <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
            <div className="navbar-nav fs-4 ">
                <NavLink activeClassName="active" to="/" className="nav-link " > Charecters </NavLink>
                <NavLink activeClassName="active" to="/locations" className="nav-link " > Locations </NavLink>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar