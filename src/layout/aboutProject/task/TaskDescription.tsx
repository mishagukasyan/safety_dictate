import React from "react";
import { TaskAboutIcon1 } from "../../../components/icons/TaskAboutIcon1";
import styled from "styled-components";
import { TaskAboutIcon2 } from "../../../components/icons/TaskAboutIcon2";

export const TaskDescriptions = () => {
  return (
    <DescriptionContainer>
      <TaskDescription>
        <TaskAboutIcon1 />
        <h3>
          Помогаем оценить ваши знания. Наши тесты позволяют определить ваш
          уровень готовности и понять, где ваших знаний может не хватать.
        </h3>
      </TaskDescription>
      <TaskDescription2>
        <TaskAboutIcon2 />
        <h3>
          Предоставляем необходимую информацию с официальных ресурсов МЧС,
          которые помогут вам освоить основы гражданской обороны, первой помощи,
          эвакуации и других важных навыков.
        </h3>
      </TaskDescription2>
    </DescriptionContainer>
  );
};

const TaskDescription = styled.div`
  width: 360px;
  border: 1px solid #cecece;
  border-radius: 30px;
  padding: 32px 46px 41px 44px;
  h3 {
    width: 270px;
    color: #3c3c3c;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    margin-top: 20px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const TaskDescription2 = styled.div`
  width: 360px;
  height: 346px;
  border: 1px solid #cecece;
  border-radius: 30px;
  padding: 27px 60px 36px 44px;
  h3 {
    width: 256px;
    color: #3c3c3c;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    margin-top: 20px;
  }

  position: relative;
  top: -40px;
  margin-bottom: -40px;
`;
