import React from "react";
import { ArrowTasksIcon } from "../../../components/icons/ArrowTasksIcon";
import styled from "styled-components";
import { TaskAboutIcon1 } from "../../../components/icons/TaskAboutIcon1";
import { TaskDescriptions } from "./TaskDescription";

export const Tasks = () => {
  return (
    <StyledTask>
      <StyledTaskText>Наши задачи:</StyledTaskText>
      <ArrowTasksIcon />
      <TaskDescriptions />
    </StyledTask>
  );
};

const StyledTask = styled.div`
  margin-top: 90px;
`;

const StyledTaskText = styled.h2`
  color: #3c3c3c;
  font-size: 40px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.8px;
`;
