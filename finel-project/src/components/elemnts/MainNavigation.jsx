import React from "react";
import { Link } from "react-router-dom";
import "./css/mainNavigation.css";

function MainNavigation() {
  return (
    <nav className=" main-navigation  p-0-5">
      <div className="links flex">
        <p>Musical instrument store</p>
        <ul>
          <li>
            <Link className="m-r nav-link" to="admin">
              Admin
            </Link>
          </li>
          <li>
            <Link className="m-r nav-link" to="menu/products">
              Menu
            </Link>
          </li>
          <li>
            <Link className="m-r nav-link" to="login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
