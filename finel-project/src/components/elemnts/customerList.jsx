import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import "../elemnts/css/customerList.css";

function CustomerList({ cstomersList }) {
  return (
    <ul className="list">
      {cstomersList.map((item, index) => {
        return (
          <li key={index}>
            <Link className="item" to={`/menu/editcustomers/${item.firstName}`}>
              <div className="firstName">{item.firstName}</div>
              <div className="lastName">{item.lastName}</div>
              <span>{<AiOutlineEdit />}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CustomerList;
