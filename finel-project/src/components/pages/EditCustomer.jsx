import React from "react";
import "../UI/UI.css";
import "./css/main.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { rootActions } from "../../redux/dataSlice";
import Container from "../UI/Container";

function EditCustomer() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { customers } = useSelector((state) => state.root);
  const { customersName } = useParams();
  const currentCustomer = customers.find(
    (item) => item.firstName === customersName
  );

  const [customer, setCustomer] = useState({
    id: currentCustomer.id,
    firstName: currentCustomer.firstName,
    lastName: currentCustomer.lastName,
    city: currentCustomer.city,
    productsIds: currentCustomer.productsIds,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      rootActions.UpdateCustomer({ customer: customer, preName: customersName })
    );
    navigate("/menu/customers");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(
      rootActions.deleteCustomer({ id: customer.id, name: customer.firstName })
    );
    navigate("/menu/customers");
  };

  return (
    <Container>
      <div>
        <div className="edit-controll">
          <form className="form-controll" onSubmit={submitHandler}>
            <label className="label">First Name</label>
            <input
              value={customer.firstName}
              type="text"
              onChange={(e) =>
                setCustomer({ ...customer, firstName: e.target.value })
              }
            />
            <label className="label">Last Name</label>
            <input
              value={customer.lastName}
              type="text"
              onChange={(e) =>
                setCustomer({ ...customer, lastName: e.target.value })
              }
            />
            <label className="label">City</label>
            <input
              value={customer.city}
              type="text"
              onChange={(e) =>
                setCustomer({ ...customer, city: e.target.value })
              }
            />

            <div className="buttons">
              <button className="btn-submit" type="submit">
                Save changes
              </button>
              <button className="btn-delete" onClick={deleteHandler}>
                Delet product
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default EditCustomer;
