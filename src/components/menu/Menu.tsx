import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="/testing">Тестирование</a>
        </li>
        <li>
          <a href="/training">Подготовка</a>
        </li>
        <li>
          <a href="/project_partners">Партнеры проекта</a>
        </li>
        <li>
          <a href="/about_project">О проекте</a>
        </li>
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
