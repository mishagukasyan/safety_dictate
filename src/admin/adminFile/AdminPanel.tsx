import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Link, Outlet } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  to,
  onClick,
  active,
  children,
}) => {
  return (
    <StyledNavLink to={to} onClick={onClick} active={active}>
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
            to="adminReport"
            onClick={() => setActiveTab("download")}
            active={activeTab === "download"}
          >
            Скачать отчет
          </StyledNavLink>
          <StyledNavLink
            to="customise-test-section"
            onClick={() => setActiveTab("settings")}
            active={activeTab === "settings"}
          >
            Настройка разделов тестирования
          </StyledNavLink>
          <StyledNavLink
            to="#"
            onClick={() => setActiveTab("testSettings")}
            active={activeTab === "testSettings"}
          >
            Настройка вопросов-ответов для тестирования
          </StyledNavLink>
        </DashboardMenu>

        <ReportMenu>
          <Outlet />
        </ReportMenu>
      </StyledDiv>
    </Container>
  );
};

const StyledDiv = styled.div`
  display: flex;
`;

const DashboardMenu = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const StyledNavLink = styled(Link)<{ active: boolean }>`
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
