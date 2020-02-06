import React from 'react';

import "./styles.scss";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">CompanyName</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropDown" data-toggle="dropdown">Products</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Product1
              </a>
              <a className="dropdown-item" href="#">
                Product2
              </a>
              <a className="dropdown-item" href="#">
                Product3
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
