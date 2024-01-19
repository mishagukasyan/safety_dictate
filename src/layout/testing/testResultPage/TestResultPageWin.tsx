import React from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { Medal } from "../../../components/icons/Medal";

interface TestResultPageWinProps {
  location: {
    state: {
      result: string;
    };
  };
}

export const TestResultPageWin: React.FC<TestResultPageWinProps> = ({
  location,
}) => {
  const result = location.state?.result || "failed"; // Значение по умолчанию, если результат не передан

  return (
    <Container>
      <ResultTestPage>
        <ResultTextContainer>
          <h2>
            {result === "passed"
              ? "Поздравляем с успешным прохождением теста!"
              : "Тест не сдан"}
          </h2>
        </ResultTextContainer>
        {result === "passed" && (
          <ImgWrapper>
            <Medal />
          </ImgWrapper>
        )}
      </ResultTestPage>
    </Container>
  );
};

const ResultTestPage = styled.div`
  display: flex;
  gap: 28px;
`;

const ResultTextContainer = styled.div``;

const ImgWrapper = styled.div``;
