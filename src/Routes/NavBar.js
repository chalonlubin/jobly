import React, { useContext } from "react";
import userContext from "../Users/userContext";

import { NavLink } from "react-router-dom";

/** Renders the navbar.
 *
 * Props: none
 *
 * State: none
 *
 * App -> NavBar
 *
 * */
function NavBar({ logout }) {
  const { user } = useContext(userContext);
  //TODO: Add light/dark mode.
  // Will require state so I wanted to touch base with you first
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="logo512.png"
            alt="jobs icon"
            className="d-inline-block m-2"
            width="30"
            height="24"
          ></img>
          Jobly
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* how do i group this?? Chalon - I gotchu! */}
            {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/companies">
                    Companies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/jobs">
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={logout}>
                    Log Out {user.username}
                  </button>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
