import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { ReportComponent } from "./ReportComponent";

export const AdminPanel = () => {
  return (
    <Container>
      <StyledDiv>
        <DashboardMenu>
          <a href="#">Скачать отчет</a>
          <a href="#">Настройка вопросов\ответов</a>
        </DashboardMenu>
        <ReportMenu>
          <h2>Отчет участников тестирования</h2>
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
`;

const ReportMenu = styled.div``;
