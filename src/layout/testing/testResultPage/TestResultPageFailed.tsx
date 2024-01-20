import React from "react";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface TestResultPageFailedProps {
  result: string;
}

export const TestResultPageFailed: React.FC<TestResultPageFailedProps> = ({
  result,
}) => {
  return (
    <Container>
      <ResultTestPage>
        <ResultTextContainer>
          <MainText>К сожалению, тест не был пройден</MainText>
          <Line></Line>
          <SecondText>
            Вы ответили правильно на {result} вопросов. Попробуйте еще раз и
            учтите сделанные ошибки. Удачи!
          </SecondText>
          <ButtonContainer>
            <StyledNavLink to="/testing">Попробовать еще раз</StyledNavLink>
            <StyledNavLink to="/training">Подготовиться</StyledNavLink>
          </ButtonContainer>
        </ResultTextContainer>
      </ResultTestPage>
    </Container>
  );
};

const ResultTestPage = styled.div``;

const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MainText = styled.h2`
  color: #3c3c3c;
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;
`;

const Line = styled.div`
  width: 712px;
  border: 1px solid red;
`;

const SecondText = styled.p`
  width: 480px;
  color: #3c3c3c;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 100px;
  button {
    display: inline-flex;
    padding: 18px 34px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid #3798cd;
    font-size: 18px;
    font-weight: 500;
    line-height: 120%;
    color: #3798cd;
    :hover {
      background: #3798cd;
      color: #fff;
      cursor: pointer;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  padding: 18px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid #3798cd;
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  color: #3798cd;
  :hover {
    background: #3798cd;
    color: #fff;
    cursor: pointer;
  }
`;
