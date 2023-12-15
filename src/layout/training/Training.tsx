import React from "react";
import { Container } from "../../components/Container";
import styled from "styled-components";
import { TrainingTestTextContainer } from "../../components/text/TrainingTestTextContainer";
import { TrainingIcon } from "../../components/icons/TrainingIcon";
import { TrainingTestDescription } from "../../components/text/TrainingTestDescription";
import { TestSectionDescription } from "./TestSectionDescription";

export const Training = () => {
  return (
    <Container>
      <StyledTraining>
        <TrialTest>
          <StyledText>
            <TrainingTestTextContainer />
            <TrainingTestDescription />
          </StyledText>
          <TrainingIcon />
        </TrialTest>
        <TestSectionDescription />
      </StyledTraining>
    </Container>
  );
};

const StyledTraining = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 108px;
  margin-top: 80px;
`;

const TrialTest = styled.div`
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
