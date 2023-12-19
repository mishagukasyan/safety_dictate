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

const StyledHeader = styled.header`
  border-bottom: 1px solid #ededed;
  padding: 50px 0;
`;

const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
