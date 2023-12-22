import React from "react";
import { Container } from "../../components/Container";
import styled from "styled-components";

export const Result = () => {
  return (
    <StyledResult>
      <Container>
        <h2>Тест по данной теме завершен</h2>
        <Border></Border>
      </Container>
    </StyledResult>
  );
};

const StyledResult = styled.div``;

const Border = styled.div``;
