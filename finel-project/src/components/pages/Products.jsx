import { useSelector } from "react-redux";
import Product from "../elemnts/product";
import "./css/products.css";
import { useState } from "react";
import { useEffect } from "react";
import Container from "../UI/Container";
import { memo } from "react";

function Products() {
  const [totals, setTotals] = useState({
    sales: 0,
    quantity: 0,
  });
  const { products, customers, purchases } = useSelector((state) => state.root);

  useEffect(() => {
    const total = purchases?.reduce(
      (acc, item) => {
        return {
          price: acc.price + item.price,
          quantity: acc.quantity + item.quantity,
        };
      },
      { price: 0, quantity: 0 }
    );
    setTotals({ sales: total.price, quantity: total.quantity });
  }, [purchases]);

  return (
    <Container>
      <div className="products-controll">
        <div className="total">
          <h4>
            <span>Total purchases:</span>
            <span>{purchases.length}</span>{" "}
          </h4>
          <h4>
            <span>Total seals:</span> <span>{`${totals.sales}.00 $`}</span>
          </h4>
          <h4>
            <span>Total Quantity:</span> <span>{totals.quantity}</span>
          </h4>
        </div>
        <div className="products-list">
          {products.map((prod, index) => {
            return (
              <Product
                customers={customers}
                purchases={purchases}
                product={prod}
                key={index}
                productId={prod.id}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default memo(Products);
