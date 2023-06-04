import React from "react";
import MainLayout from "../layout/main/MainLayout";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateRoute;
