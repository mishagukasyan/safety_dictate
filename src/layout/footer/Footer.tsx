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
  margin-top: 100px;
  padding: 35px 0;
  border-top: 1px solid #d9d9d9;
`;

const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  h2 {
    color: #3c3c3c;
    font-size: 24px;
    font-weight: 500;
    line-height: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 12px;
`;
