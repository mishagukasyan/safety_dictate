import React from "react";
import { Container } from "../../components/Container";
import { TelegramIcon } from "../../components/icons/TelegramIcon";
import { MailIcon } from "../../components/icons/MailIcon";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <ContentFooter>
          <h2>Связь с нами</h2>

          <IconContainer>
            <TelegramIcon />
            <MailIcon />
          </IconContainer>
        </ContentFooter>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 35px;
`;

const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 12px;
`;
