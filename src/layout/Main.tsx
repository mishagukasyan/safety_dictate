import React from "react";
import styled from "styled-components";
import photo from "../assets/image/banner1.webp";
import { Container } from "../components/Container";

export const Main = () => {
  return (
    <MainContainer>
      <Container>
        <ImageContainer>
          <Banner src={photo} />
          <ContentContainer>
            <h1>
              От чрезвычайных ситуаций в 2022 году пострадало 235 274 людей.
              Более 70% из них могли бы спастись, если бы знали правила
              поведения в экстренных ситуациях. А вы знаете эти правила?
              Проверим?
            </h1>
            <button>Начать тест</button>
          </ContentContainer>
        </ImageContainer>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 640px;
`;

const Banner = styled.img`
  border-radius: 80px;
`;

const ImageContainer = styled.div``;

const ContentContainer = styled.div`
  position: absolute;
  top: 320px;
  left: 250px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;

  h1 {
    width: 510px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    color: #f1f1f1;
    text-align: justify;
  }

  button {
    width: 175px;
    padding: 18px 34px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    border-radius: 12px;
    background: var(--unnamed, #3798cd);
  }
`;
