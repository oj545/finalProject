import React from "react";
import { filterPurchasesByCustomer } from "../../helperFunction/filtersFunction";
import { formatDate } from "../../helperFunction/dates";

function PurchasesTabel({ products, customers, purchases, search }) {
  return (
    <div>
      <table className="purchases-tabel">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filterPurchasesByCustomer(
            purchases,
            search.customer || undefined,
            search.product || undefined,
            search.date || undefined
          ).map((purchase, index) => {
            return (
              <tr key={index}>
                <td>{purchase.customer}</td>
                <td>{purchase.product}</td>
                <td>{purchase.quantity}</td>
                <td>{`${purchase.price}.00$`}</td>
                <td>{formatDate(purchase.creatAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PurchasesTabel;
