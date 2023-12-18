import React from "react";
import styled from "styled-components";

export const TestSectionDescription = () => {
  return (
    <StyledTestSection>
      <TextSection>
        <TextLink href="/testSectionPage1">
          <h2>
            Раздел 1. Психологические факторы, оказывающие влияние на активность
            в политической сфере
          </h2>
        </TextLink>
      </TextSection>
      <TextSection>
        <TextLink href="/testSectionPage2">
          <h2>
            Раздел 2. Влияние психологической совместимости членов
            профессиональной группы на социально-психологический климат
            коллектива
          </h2>
        </TextLink>
      </TextSection>
      <TextSection>
        <TextLink href="/testSectionPage3">
          <h2>
            Раздел 3. Условия и механизмы формирования познавательных процессов
            представителей трех возрастов (дошкольное детство, младший школьный
            возраст, подростковый возраст)
          </h2>
        </TextLink>
      </TextSection>
      <TextSection>
        <TextLink href="/testSectionPage4">
          <h2>
            Раздел 4. Социально-психологический тренинг как способ повышения
            коммуникативной компетентности
          </h2>
        </TextLink>
      </TextSection>
    </StyledTestSection>
  );
};

const StyledTestSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const TextSection = styled.div`
  border: 1px solid #cecece;
  border-radius: 30px;
  &:hover {
    border: 2px solid #3798cd;
  }
`;

const TextLink = styled.a`
  h2 {
    padding: 32px;
    padding-left: 40px;
    color: #3c3c3c;
    font-size: 20px;
    font-weight: 600;
    line-height: 120%;
  }
`;
