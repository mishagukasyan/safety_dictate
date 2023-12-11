import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="#">Тестирование</a>
        </li>
        <li>
          <a href="#">Подготовка</a>
        </li>
        <li>
          <a href="#">Партнеры проекта</a>
        </li>
        <li>
          <a href="#">О проекте</a>
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
