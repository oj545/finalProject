import React from "react";
import { Outlet } from "react-router-dom";
import MenuNavigatin from "../elemnts/MnueNavigatin";
import "./css/main.css";
import { useSelector } from "react-redux";
import Container from "../UI/Container";

function Menu() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <Container>
      <div className="menu">
        {!currentUser && <h1 className="menu-message">you must login first</h1>}
        <MenuNavigatin />
        {currentUser && <div>{<Outlet />}</div>}
      </div>
    </Container>
  );
}

export default Menu;
