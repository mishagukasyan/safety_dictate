import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../layout/header/Header";
import { Footer } from "../layout/footer/Footer";

export const Layout = () => {
  const isAdminPanel: boolean = false;
  return (
    <>
      <div>
        <Header isAdminPanel={isAdminPanel} />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
