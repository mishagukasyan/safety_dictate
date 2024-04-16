import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { AdminHeader } from "../../admin/adminFile/AdminHeader";
import styles from "./styles.module.scss"

interface HeaderProps {
  isAdminPanel: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAdminPanel }) => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerMenu}>
         <Logo />
          {isAdminPanel ? <AdminHeader /> : <Menu />}
        </div>
      </Container>
    </div>
  );
};