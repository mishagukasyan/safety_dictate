import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <StyledNavLink to="/testing">Тестирование</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/training">Подготовка</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/project_partners">Партнеры проекта</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about_project">О проекте</StyledNavLink>
        </li>{" "}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 80px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #3c3c3c;
  font-size: 16px;
  font-weight: 400;
  line-height: 110%;
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #3c3c3c;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;
