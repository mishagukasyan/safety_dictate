import React from "react";
import { TaskAboutIcon1 } from "../../../components/icons/TaskAboutIcon1";
import styled from "styled-components";
import { TaskAboutIcon2 } from "../../../components/icons/TaskAboutIcon2";
import { TaskAboutIcon3 } from "../../../components/icons/TaskAboutIcon3";

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
      <TaskDescription3>
        <TaskAboutIcon3 />
        <h3>
          Создаем сообщество в <LinkTg href="">телеграмм канале</LinkTg>, где
          можно следить за последними событиями и обновлениями в мире
          безопасности. Мы предоставляем актуальную информацию и советы, которые
          помогут в любой ситуации.
        </h3>
      </TaskDescription3>
    </DescriptionContainer>
  );
};

const TaskDescription = styled.div`
  width: 360px;
  border: 1px solid #cecece;
  border-radius: 30px;
  padding: 32px 46px 41px 44px;
  margin-top: 36px;
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
  border: 1px solid #cecece;
  border-radius: 30px;
  padding: 27px 60px 39px 44px;
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

const TaskDescription3 = styled.div`
  width: 360px;
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
  top: -78px;
  margin-bottom: -78px;
`;

const LinkTg = styled.a`
  color: #3c3c3c;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  text-decoration-line: underline;
`;
