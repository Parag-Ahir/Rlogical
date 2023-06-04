import React from "react";
import "./AuthLayout.scss";
interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return <div className="auth-container">{children}</div>;
};

export default AuthLayout;
