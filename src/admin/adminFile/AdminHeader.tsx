import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";

export const AdminHeader = () => {
  return (
    <StyledAdminHeader>
      <Logo />
      <h2></h2>
      <NavLink>перейти на сайт</NavLink>
      <button>Выход</button>
    </StyledAdminHeader>
  );
};

const StyledAdminHeader = styled.div`
  display: flex;
`;

const NavLink = styled.nav``;
