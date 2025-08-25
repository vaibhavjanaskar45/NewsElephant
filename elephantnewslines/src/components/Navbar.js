import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/newsFavicon.png" alt="Logo" width="38" height="28" className="d-inline-block align-text-top mx-2" />
              NewsElephant
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
