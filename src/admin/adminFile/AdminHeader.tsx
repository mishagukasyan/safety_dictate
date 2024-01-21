import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdminHeader = () => {
  return (
    <StyledAdminHeader>
      <AdminWrapper>
        <h2>Панель администратора</h2>
        <StyledNavLink to="/main">перейти на сайт</StyledNavLink>
      </AdminWrapper>
      <button>Выход</button>
    </StyledAdminHeader>
  );
};

const StyledAdminHeader = styled.div`
  display: flex;
`;

const AdminWrapper = styled.div`
  display: flex;
`;

const StyledNavLink = styled(NavLink)``;
