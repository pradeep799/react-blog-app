import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <h1>
          <Link to="/" className="logo">
            Logo
          </Link>
        </h1>
        <ul className="navbar">
          <li>
            <Link to="/" className="nav__links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="nav__links">
              Add New
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
