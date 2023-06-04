import React from "react";
import "./MainLayout.scss";
interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return <div className="main-container">{children}</div>;
};

export default MainLayout;
