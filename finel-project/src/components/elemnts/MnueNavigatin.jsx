import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/menuNavigation.css";

function MenuNavigatin() {
  const [url, setUrl] = useState();

  const activeHandler = (e) => {
    e.preventDefault();
    const urlPath = window.location.href.split("/");
    setUrl(urlPath[urlPath.length - 1]);
  };
  return (
    <>
      <nav className="menu-nav">
        <ul className="menu-list">
          <li
            onClick={activeHandler}
            className={url === "products" ? "first-link" : ""}>
            <Link className="mnue-link" to="products">
              products
            </Link>
          </li>
          <li
            onClick={activeHandler}
            className={url === "customers" ? "second-link" : ""}>
            <Link className="mnue-link" to="customers">
              customers
            </Link>
          </li>
          <li
            className={url === "purchases" ? "last-link" : ""}
            onClick={activeHandler}>
            <Link className="mnue-link" to="purchases">
              purchases
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuNavigatin;
