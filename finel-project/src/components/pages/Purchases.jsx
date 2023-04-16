import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./css/purchases.css";
import Container from "../UI/Container";

import PurchasesTabel from "../elemnts/PurchasesTabel";

function Purchases() {
  const [search, setSearch] = useState({
    product: "",
    customer: "",
    date: undefined,
  });

  const { products, customers, purchases } = useSelector((state) => state.root);

  const selectPdoductHandler = (e) => {
    setSearch({ ...search, product: e.target.value });
  };
  const selectCustomerHandler = (e) => {
    setSearch({ ...search, customer: e.target.value });
  };

  const setDateHandler = (e) => {
    setSearch({ ...search, date: e.target.value });
  };
  const refreshHandler = (e) => {
    e.preventDefault();
    setSearch({
      product: "",
      customer: "",
      date: undefined,
    });
  };

  return (
    <Container>
      <h1 className="fitlters-title">Filters</h1>
      <form type="submit" className="purchases-form">
        <div className="purchases-form-combox">
          <select onChange={selectPdoductHandler}>
            <option value="">-Product-</option>
            {products.map((option, index) => {
              return <option key={index}>{option.name}</option>;
            })}
          </select>

          <select plasholder="select customer" onChange={selectCustomerHandler}>
            <option value="">-Customer-</option>
            {customers.map((option, index) => {
              return <option key={index}>{option.firstName}</option>;
            })}
          </select>

          <input type="date" onChange={setDateHandler} />
        </div>
        <div>
          <button className="purchases-form-btn" onClick={refreshHandler}>
            Refresh
          </button>
        </div>
      </form>

      <PurchasesTabel
        products={products}
        customers={customers}
        purchases={purchases}
        search={search}
      />
    </Container>
  );
}

export default Purchases;
