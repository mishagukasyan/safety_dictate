import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <ContainerMenu>
          <Logo />
          <Menu />
        </ContainerMenu>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;

const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  margin-bottom: 28px;
`;
