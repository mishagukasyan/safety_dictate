import React from "react";
import { Container } from "../../components/Container";
import styled from "styled-components";
import { Tasks } from "./task/Tasks";

export const AboutTheProject = () => {
  return (
    <StyledAboutTheProject>
      <TextContainer>
        <h2>Миссия проекта</h2>
        <BorderBotton></BorderBotton>
        <h3>
          Проект «Диктант безопасности» направлен на проверку и улучшение
          знаний, умений и готовности к действиям в условиях чрезвычайных
          ситуаций и гражданской обороны.
        </h3>
      </TextContainer>
      <Container>
        <Tasks />
      </Container>
    </StyledAboutTheProject>
  );
};

const StyledAboutTheProject = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4fbff;

  h2 {
    width: 308px;
    color: #3c3c3c;
    text-align: center;
    font-family: Roboto;
    font-size: 40px;
    font-weight: 600;
    line-height: 120%;

    padding: 90px 0 20px 0;
  }
  h3 {
    width: 542px;
    color: #3c3c3c;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.36px;
    padding: 54px 0 100px 0;
  }
`;

const BorderBotton = styled.div`
  width: 500px;
  height: 2px;
  background: #3798cd;
  margin: 0 auto;
`;
