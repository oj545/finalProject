import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../UI/Container";
import { rootActions } from "../../redux/dataSlice";
import "./css/admin.css";
import { useNavigate } from "react-router-dom";

const formType = {
  createProduct: {
    title: "Product",
    message: "Creat new Customer",
    detail1: { type: "text", label: "Name", value: "Product Name" },
    detail2: { type: "number", label: "Price", value: 0 },
    detail3: { type: "number", label: "Quantiy", value: 0 },
  },
  createCustomer: {
    title: "Customer",
    message: "Creat new Product",
    detail1: { type: "text", label: "First Name", value: "" },
    detail2: { type: "text", label: "Last Name", value: "" },
    detail3: { type: "text", label: "City", value: "" },
  },
};

function Admin() {
  const { currentUser } = useSelector((state) => state.users);
  const [toggel, setToggel] = useState(false);
  const [formDetails, setFormDetails] = useState(formType.createProduct);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const toggelItemHandler = (e) => {
    e.preventDefault();
    const toggelForm = toggel
      ? formType.createProduct
      : formType.createCustomer;
    setToggel(!toggel);
    setFormDetails(toggelForm);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(rootActions.creatNewItems(formDetails));
    navigation("/menu/products");
  };

  return (
    <Container>
      {currentUser?.userName !== "admin" && (
        <h1 className="admin-message">You Must Login as Admin</h1>
      )}
      {currentUser?.userName === "admin" && (
        <div>
          <form onSubmit={submitHandler} className="admin-form">
            <h2 className="title">New {formDetails.title}</h2>
            <label htmlFor="">{formDetails.detail1.label}</label>
            <input
              value={formDetails.detail1.value}
              type={formDetails.detail1.type}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  detail1: { ...formDetails.detail1, value: e.target.value },
                })
              }
            />
            <label htmlFor="">{formDetails.detail2.label}</label>
            <input
              value={formDetails.detail2.value}
              type={formDetails.detail2.type}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  detail2: { ...formDetails.detail2, value: e.target.value },
                })
              }
            />
            <label htmlFor="">{formDetails.detail3.label}</label>
            <input
              value={formDetails.detail3.value}
              type={formDetails.detail3.type}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  detail3: { ...formDetails.detail3, value: e.target.value },
                })
              }
            />
            <button className="toggel-btn" onClick={toggelItemHandler}>
              {formDetails.message}
            </button>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </Container>
  );
}

export default Admin;
