import React from "react";
import MainNavigation from "../elemnts/MainNavigation";

import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <header>
        <MainNavigation />
      </header>
      <main>{<Outlet />}</main>
    </div>
  );
}

export default Home;
