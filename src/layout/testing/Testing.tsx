import React from "react";
import { Container } from "../../components/Container";
import { Order } from "../../components/icons/Order";
import styled from "styled-components";
import { TextDescription } from "../../components/text/TextWithBullet";
import { Form } from "../../components/form/Form";
import { TestTextContainer } from "../../components/text/TestTextContainer";

export const Testing = () => {
  return (
    <Container>
      <StyledTesting>
        <StyledOrder>
          <StyledText>
            <TestTextContainer />
            <TextDescription />
          </StyledText>
          <Order />
        </StyledOrder>
        <Form />
      </StyledTesting>
    </Container>
  );
};

const StyledTesting = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  margin: 80px 0;
`;

const StyledOrder = styled.div`
  max-width: 984px;
  width: 100%;
  border: 1px solid black;
  border-radius: 80px;
  display: flex;
  justify-content: space-between;
  padding: 50px 80px;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
