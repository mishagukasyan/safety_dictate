import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../layout/header/Header";
import { Footer } from "../layout/footer/Footer";
import styles  from "./layout.module.scss";

export const Layout = () => {
  const isAdminPanel: boolean = false;
  return (
    <div className={styles.layout}>
      <Header isAdminPanel={isAdminPanel} />
      <div className={styles.content}><Outlet /></div>
      <Footer />
    </div>
  );
};
