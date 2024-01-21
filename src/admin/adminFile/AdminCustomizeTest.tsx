import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { TestSection } from "./TestSections";

export const AdminCustomizeTestSections = () => {
  const testSections = [
    "Психологические факторы, оказывающие влияние на активность в политической сфере",
    "Влияние психологической совместимости членов профессиональной группы на социально-психологический климат коллектива",
    "Условия и механизмы формирования познавательных процессов представителей трех возрастов (дошкольное детство, младший школьный возраст, подростковый возраст)",
    "Социально-психологический тренинг как способ повышения коммуникативной компетентности",
  ];
  return (
    <StyledCustomizeSectioin>
      <Button>Добавить раздел</Button>
      <Line></Line>
      <Sections>
        <ul>
          {testSections.map((section) => (
            <li key={section}>
              <Link to={`/admin/question-list/${encodeURIComponent(section)}`}>
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </Sections>
    </StyledCustomizeSectioin>
  );
};

const StyledCustomizeSectioin = styled.div`
  padding: 48px 0 0 40px;
`;

const Button = styled.button`
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #3798cd;
  background: #fff;
  cursor: pointer;
`;

const Line = styled.div`
  width: 1048px;
  border: 1px solid #f7f7f7;
`;

const Sections = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 34px;
    li {
      width: 1048px;
      padding: 28px 40px;
      align-items: center;
      border-radius: 30px;
      border: 1px solid #cecece;
      background: #f7f7f7;
    }
  }
`;
