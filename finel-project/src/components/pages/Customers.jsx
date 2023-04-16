import React from "react";

import CustomerTabel from "../elemnts/CustomerTabel";
import Container from "../UI/Container";
import { useSelector } from "react-redux";

function Customers() {
  const { products, customers, purchases } = useSelector((state) => state.root);
  return (
    <Container>
      <CustomerTabel
        products={products}
        customers={customers}
        purchases={purchases}
      />
    </Container>
  );
}

export default Customers;
