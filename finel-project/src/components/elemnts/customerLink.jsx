import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { filterPurchasesByCustomerAndProduct } from "../../helperFunction/filtersFunction";

function CustomerLink({ firstName, productName, purchases }) {
  const customerPurchasesByProductObj = filterPurchasesByCustomerAndProduct(
    purchases,
    productName,
    firstName
  );

  return (
    <>
      <li>
        <Link to={`/menu/editcustomers/${firstName}`} className="customer-link">
          {firstName}
          <span className="edit-customer">
            <AiOutlineEdit />
          </span>
        </Link>

        <div className="purchasesData">
          <p className="purchases-responsive">
            purchases: {customerPurchasesByProductObj.purchases}
          </p>
          <p>Quintity: {customerPurchasesByProductObj.quantity} </p>
          <p>Price: {customerPurchasesByProductObj.price}.00$ </p>
        </div>

        <Link to={`transactions/${firstName}`} className="customer-btn">
          Add
        </Link>
      </li>
    </>
  );
}
export default CustomerLink;
