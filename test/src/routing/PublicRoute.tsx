import React from "react";
import AuthLayout from "../layout/auth/AuthLayout";
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default PublicRoute;
