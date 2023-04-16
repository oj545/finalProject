import React, { useReducer, useState } from "react";
import Container from "../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import "./css/login.css";
import { userActions } from "../../redux/usersSlice";

const initialState = {
  userName: { isValid: false, v: "" },
  password: { isValid: false, v: "" },
  message: {
    password: "please provid password",
    userName: "please provide user name",
  },
  isformValid: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERNAME":
      const isUserNameValid = action.payload.length >= 4 ? true : false;
      return {
        ...state,
        ...{
          userName: { isValid: isUserNameValid, value: action.payload },
          message: {
            ...state.message,
            userName: isUserNameValid ? "" : "a user name must have 4 carector",
          },
          isformValid: isUserNameValid && state.password.isValid,
        },
      };
    case "PASSWORD":
      const isPasswordNameValid = action.payload.length >= 4 ? true : false;
      return {
        ...state,
        ...{
          password: { isValid: isPasswordNameValid, value: action.payload },
          message: {
            ...state.message,
            password: isPasswordNameValid
              ? ""
              : "a password must have 4 carector",
          },
          isformValid: isPasswordNameValid && state.userName.isValid,
        },
      };

    default:
      return state;
  }
};
function Login() {
  const dispatch = useDispatch();
  const [formMessage, setFormMessage] = useState({});

  const { message } = useSelector((state) => state.users);
  const [form, setform] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormMessage(form.message);
    dispatch(
      userActions.login({
        userName: form.userName.value,
        password: form.password.value,
      })
    );
  };

  return (
    <Container>
      <form className="login-form" onSubmit={submitHandler}>
        <label htmlFor="">User Name</label>
        <small>{formMessage.userName}</small>
        <input
          type="text"
          onChange={(e) =>
            setform({ type: "USERNAME", payload: e.target.value })
          }
        />

        <label>Password</label>
        <small>{formMessage.password}</small>
        <input
          type="text"
          onChange={(e) =>
            setform({ type: "PASSWORD", payload: e.target.value })
          }
        />

        <button type="submit">Submit</button>
        <small>{message}</small>
      </form>
    </Container>
  );
}

export default Login;
