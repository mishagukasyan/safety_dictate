import React from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { Medal } from "../../../components/icons/Medal";

interface TestResultPageWinProps {
  result: string;
}

export const TestResultPageWin: React.FC<TestResultPageWinProps> = ({
  result,
}) => {
  return (
    <Container>
      <ResultTestPage>
        <ResultTextContainer>
          <h2>Поздравляем с успешным прохождением теста!</h2>
          <p>Ваш результат: {result}</p>
        </ResultTextContainer>
        <ImgWrapper>
          <Medal />
        </ImgWrapper>
      </ResultTestPage>
    </Container>
  );
};

const ResultTestPage = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const ResultTextContainer = styled.div``;

const ImgWrapper = styled.div``;
