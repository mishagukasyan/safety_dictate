import React from "react";
import styled from "styled-components";

export const TestTextContainer = () => {
  return (
    <TextContainer>
      <h2>Контрольное тестирование</h2>
      <h3>
        Доступ к серии вопросов, предназначенных для проверки ваших знаний и
        оценки уровня подготовки.
      </h3>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h2 {
    width: 520px;
    color: var(--unnamed, #3c3c3c);
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
  h3 {
    width: 550px;
    color: #b0b0b0;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;
