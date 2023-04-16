import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { filterCustomerById } from "../../helperFunction/filtersFunction";
import CustomerLink from "./customerLink";

function Product({ product, customers, productId, purchases }) {
  return (
    <div className="product-card ">
      <div style={{ backgroundImage: product.image }}></div>
      <Link to={`/menu/editProducts/${product.id}`} className="product-link">
        <span>{<AiOutlineEdit />}</span>
      </Link>
      <h1 className="product-title">{product.name}</h1>
      <p>
        <span>price:</span>
        <span>{product.price}</span>
      </p>
      <p>
        <span>Quantity</span>
        <span>{product.quantity}</span>
      </p>
      <h4 className="customer-title">Customers</h4>
      <div className=" shape">
        <ul className="customer-liset">
          {filterCustomerById(customers, productId).map((item, index) => {
            return (
              <CustomerLink
                key={index}
                firstName={item.firstName}
                productName={product.name}
                purchases={purchases}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Product);
