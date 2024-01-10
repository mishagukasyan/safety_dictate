import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { ReportComponent } from "./ReportComponent";

interface NavLinkProps {
  href: string;
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  onClick,
  active,
  children,
}) => {
  return (
    <StyledNavLink href={href} onClick={onClick} active={active}>
      {children}
    </StyledNavLink>
  );
};

export const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("download");

  return (
    <Container>
      <StyledDiv>
        <DashboardMenu>
          <StyledNavLink
            href="#"
            onClick={() => setActiveTab("download")}
            active={activeTab === "download"}
          >
            Скачать отчет
          </StyledNavLink>
          <StyledNavLink
            href="#"
            onClick={() => setActiveTab("settings")}
            active={activeTab === "settings"}
          >
            Настройка разделов тестирования
          </StyledNavLink>
          <StyledNavLink
            href="#"
            onClick={() => setActiveTab("testSettings")}
            active={activeTab === "testSettings"}
          >
            Настройка вопросов-ответов для тестирования
          </StyledNavLink>
        </DashboardMenu>
        <ReportMenu>
          <ReportComponent />
        </ReportMenu>
      </StyledDiv>
    </Container>
  );
};

const StyledDiv = styled.div`
  display: flex;
`;

const DashboardMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const StyledNavLink = styled.a<{ active: boolean }>`
  padding: 10px;
  margin-bottom: 8px;
  position: relative;
  text-decoration: none;
  color: #3c3c3c;
  background: ${({ active }) => (active ? "#F7F7F7" : "#FFF")};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 110%;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: #3798cd;
    display: ${({ active }) => (active ? "block" : "none")};
  }

  &:hover {
    background: #f7f7f7;
  }
`;

const ReportMenu = styled.div`
  margin-top: 40px;
`;
