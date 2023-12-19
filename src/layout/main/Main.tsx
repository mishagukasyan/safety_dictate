import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import "./../../styles/slider.css";
import photo from "../../assets/image/banner1.webp";
import photo2 from "../../assets/image/banner2.webp";
import photo3 from "../../assets/image/banner3.webp";
import { Container } from "../../components/Container";

type SlidePropsType = { text: string; image: string };

const Slide = (props: SlidePropsType) => {
  return (
    <ImageContainer>
      <Banner src={props.image} />
      <ContentContainer>
        <h1>{props.text}</h1>
        <button>
          <a href="/testpage">Начать тест</a>{" "}
        </button>
      </ContentContainer>
    </ImageContainer>
  );
};

const items = [
  <Slide
    text={
      "От чрезвычайных ситуаций в 2022 году пострадало 235 274 людей. Более 70% из них могли бы спастись, если бы знали правила поведения в экстренных ситуациях. А вы знаете эти правила? Проверим?"
    }
    image={photo}
  />,
  <Slide
    text={
      "Сотрудники медицины катастроф говорят, что основная проблема при чрезвычайных ситуациях - отсутствие знаний. Что если это произойдет с вами? Знаете ли вы как спасти себя и своих близких? Давайте проверим?"
    }
    image={photo2}
  />,
  <Slide
    text={
      "Опытные врачи говорят, что если ты не знаешь как спасти своего ребенка во время непредвиденных ситуаций, то ты не родитель. А ты знаешь что делать? Уверен?"
    }
    image={photo3}
  />,
];

export const Main = () => (
  <MainContainer>
    <AliceCarousel items={items} />
  </MainContainer>
);

const MainContainer = styled.div`
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  height: 640px;
`;

const Banner = styled.img`
  border-radius: 80px;
  margin-bottom: 32px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 320px;
  left: 150px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;

  h1 {
    max-width: 510px;
    width: 100%;
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
