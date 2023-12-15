import React from "react";
import styled from "styled-components";
import { TextBullet } from "../icons/TextBullet";

type TextWithBulletProps = {
  text: string;
};

const TextWithBullet: React.FC<TextWithBulletProps> = ({ text }) => {
  return (
    <StyledTextBlock>
      <TextBullet />
      {text}
    </StyledTextBlock>
  );
};

const StyledTextBlock = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
  color: var(--unnamed, #3c3c3c);
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
`;

export const TrainingTestDescription: React.FC = () => {
  return (
    <div>
      <TextWithBullet
        text="вопросы теста подбираются случайным образом
из разных разделов"
      />
      <TextWithBullet text="общее количество вопросов - 50" />
      <TextWithBullet text="на каждый вопрос дается 15 секунд" />
      <TextWithBullet
        text="результаты тестирования будут отправлены 
на указанную электронную почту"
      />
    </div>
  );
};
