import React from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";

export const TestResultPageFailed: React.FC = ({}) => {
  return (
    <Container>
      <ResultTestPage>
        <ResultTextContainer>
          <h2>Тест не сдан</h2>
        </ResultTextContainer>
      </ResultTestPage>
    </Container>
  );
};

const ResultTestPage = styled.div``;

const ResultTextContainer = styled.div``;
