import React from "react";
import { ArrowTasksIcon } from "../../../components/icons/ArrowTasksIcon";
import styled from "styled-components";
import { TaskAboutIcon1 } from "../../../components/icons/TaskAboutIcon1";

export const Tasks = () => {
  return (
    <StyledTask>
      <h2>Наши задачи:</h2>
      <ArrowTasksIcon />
      <div>
        <TaskAboutIcon1 />
        <h2>Тестирование</h2>
        <h3>
          Помогаем оценить ваши знания. Наши тесты позволяют определить ваш
          уровень готовности и понять, где ваших знаний может не хватать.
        </h3>
      </div>
    </StyledTask>
  );
};

const StyledTask = styled.div``;
