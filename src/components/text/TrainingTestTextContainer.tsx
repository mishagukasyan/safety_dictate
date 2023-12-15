import React from "react";
import styled from "styled-components";

export const TrainingTestTextContainer = () => {
  return (
    <TextContainer>
      <h2>Пробное тестирование</h2>
      <h3>
        Доступ к серии вопросов, которые помогут вам проверить и закрепить свои
        знания перед прохождением основного теста. Это отличная возможность для
        улучшения своих результатов.
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
