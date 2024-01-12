import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";

const Layout = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <Outlet />
    </div>
  );
};

export default Layout;