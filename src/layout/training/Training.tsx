import React from "react";
import { Container } from "../../components/Container";
import styled from "styled-components";
import { TrainingTestTextContainer } from "../../components/text/TrainingTestTextContainer";
import { TrainingIcon } from "../../components/icons/TrainingIcon";

export const Training = () => {
  return (
    <Container>
      <StyledTraining>
        <TrialTest>
          <StyledText>
            <TrainingTestTextContainer />
          </StyledText>
          <TrainingIcon />
        </TrialTest>
      </StyledTraining>
    </Container>
  );
};

const StyledTraining = styled.div``;

const TrialTest = styled.div``;

const StyledText = styled.div``;
