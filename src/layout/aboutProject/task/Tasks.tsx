import React from "react";
import { ArrowTasksIcon } from "../../../components/icons/ArrowTasksIcon";
import styled from "styled-components";
import { TaskAboutIcon1 } from "../../../components/icons/TaskAboutIcon1";
import { TaskDescriptions } from "./TaskDescription";

export const Tasks = () => {
  return (
    <StyledTask>
      <h2>Наши задачи:</h2>
      <ArrowTasksIcon />
      <TaskDescriptions />
    </StyledTask>
  );
};

const StyledTask = styled.div``;
