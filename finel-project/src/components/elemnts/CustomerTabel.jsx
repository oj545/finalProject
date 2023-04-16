import React from "react";
import {
  filterProductById,
  filterPurchasesByCustomer,
} from "../../helperFunction/filtersFunction";
import { Link } from "react-router-dom";
import "./css/costomerTabel.css";
import { formatDate } from "../../helperFunction/dates";

function CustomerTabel({ purchases, customers, products }) {
  return (
    <table className="tabel-controll">
      <thead className="tabel-head">
        <tr>
          <th>First Name</th>
          <th className="responsive">Last Name</th>
          <th className="responsive">City</th>
          <th>Products</th>
          <th>purchases</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="tabel-body">
        {customers.map((customer, index) => {
          return (
            <tr key={index}>
              <td className="tabel-customer">{customer.firstName}</td>
              <td className="tabel-customer responsive">{customer.lastName}</td>
              <td className="tabel-customer responsive">{customer.city}</td>
              <td className="tabel-products">
                {filterProductById(products, customer.id).map((prod, index) => {
                  return (
                    <p key={index}>
                      <Link
                        className="products-links"
                        to={`/menu/editProducts/${prod.id}`}
                        key={index}>
                        {prod.name}
                      </Link>
                    </p>
                  );
                })}
              </td>
              <td>
                <table className="tabel-purchases">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterPurchasesByCustomer(
                      purchases,
                      customer.firstName
                    ).map((purchase, index) => {
                      return (
                        <tr key={index}>
                          <td>{purchase.product}</td>
                          <td>{purchase.quantity}</td>
                          <td>{`${purchase.price}.00$`}</td>
                          <td>{formatDate(purchase.creatAt)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
              <td className="tabel-buy">
                <Link
                  className="buy-link"
                  to={`/menu/products/transactions/${customer.firstName}`}>
                  Buy
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default React.memo(CustomerTabel);
