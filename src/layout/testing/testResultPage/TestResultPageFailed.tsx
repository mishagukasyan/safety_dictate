import React from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";

interface TestResultPageFailedProps {
  result: string;
}

export const TestResultPageFailed: React.FC<TestResultPageFailedProps> = ({
  result,
}) => {
  console.log("Result in TestResultPageFailed:", result);
  return (
    <Container>
      <ResultTestPage>
        <ResultTextContainer>
          <h2>Тест не сдан</h2>
          <p>Ваш результат: {result}</p>
        </ResultTextContainer>
      </ResultTestPage>
    </Container>
  );
};

const ResultTestPage = styled.div``;

const ResultTextContainer = styled.div``;
