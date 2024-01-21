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
          <Line></Line>
          <p>
            Вы ответили правильно на {result} вопросов. Это отличный результат,
            свидетельствующий о твоих знаниях и умениях.
          </p>
        </ResultTextContainer>
        <Medal />
      </ResultTestPage>
    </Container>
  );
};

const ResultTestPage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 28px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 104px;
  padding-bottom: 310px;
`;

const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    width: 506px;
    color: #3c3c3c;
    font-family: Roboto;
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
  }
  p {
    width: 391px;
    color: #3c3c3c;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    margin-top: 12px;
  }
`;

const Line = styled.div`
  width: 546px;
  border: 1px solid #67e382;
`;

const ImgWrapper = styled.div``;
