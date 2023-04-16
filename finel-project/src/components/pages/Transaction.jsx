import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/transaction.css";
import { rootActions } from "../../redux/dataSlice";
import { filterProductByName } from "../../helperFunction/filtersFunction";
import { useEffect } from "react";
import {
  getCustomerItem,
  getProductItem,
} from "../../helperFunction/findFunction";

function Transaction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customerName } = useParams();
  const { products, customers } = useSelector((state) => state.root);
  const [cost, setCost] = useState("");
  const [transaction, setTransaction] = useState({
    product: products[0].name,
    quantity: 0,
    customer: customerName,
    price: 0,
  });

  const confirmHandler = (e) => {
    e.preventDefault();
    const currentProduct = filterProductByName(
      products,
      transaction.product
    )[0];
    dispatch(
      rootActions.creatTransaction({
        transaction: {
          ...transaction,
          price: currentProduct.price * transaction.quantity,
          creatAt: Date.now(),
        },
        product: getProductItem(products, transaction.product),
        customer: getCustomerItem(customers, customerName),
      })
    );
    navigate("/menu/products");
  };

  useEffect(() => {
    const obj = filterProductByName(products, transaction.product)[0];
    setCost(obj.price * transaction.quantity);
  }, [transaction]);

  const selectHandler = (e) => {
    setTransaction({
      ...transaction,
      product: e.target.value,
    });
  };

  return (
    <div className="transaction">
      <div className="">
        <h1>Customre Name: {customerName}</h1>
        <div className="transaction-form">
          <label htmlFor=""></label>
          <input
            onChange={(e) =>
              setTransaction({ ...transaction, quantity: +e.target.value })
            }
            min="1"
            type="number"
            placeholder="Quantity"
          />
          <select
            placeholder="Pruduct"
            onChange={selectHandler}
            value={transaction.product}>
            {products.map((option, index) => {
              return <option key={index}>{option.name}</option>;
            })}
          </select>
          <button onClick={confirmHandler}>Confirm</button>
        </div>
        <div className="transaction-details">
          <p>
            <span>cost:</span> <span>{`${cost}.00 $`}</span>
          </p>
          <p>
            <span>Quantity:</span> {transaction.quantity}
          </p>
          <p>
            <span>Customer:</span> <span>{customerName}</span>
          </p>
          <p>
            <span>Pruduct:</span> <span>{transaction.product}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
