import React from "react";
import styled from "styled-components";

export const AdminHeader = () => {
  return (
    <StyledAdminHeader>
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
