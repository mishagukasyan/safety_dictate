import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { useNavigate } from "react-router-dom";

type Question = {
  id: number;
  text: string;
  options: string[];
};

export const TestSectionPage1: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const navigate = useNavigate();

  const questions: Question[] = [
    {
      id: 1,
      text: "Признание самоценности личности, реализация внутренней и внешней свободы – это принцип ... ",
      options: ["гуманизма ", "непрерывности", "демократизации", "целостности"],
    },
    {
      id: 2,
      text: "Социальную перцепцию определяют как …?",
      options: [
        "процесс, включающий в себя выработку единой стратегии взаимодействия, восприятие и понимание другого человека ",
        "восприятие внешних признаков человека, соотнесение их с его личностными характеристиками, интерпретацию и прогнозирование на этой основе его поступков",
        "речь, которая дополняется не только экспрессивными реакциями поведения, но и его семантикой, т.е. смыслом поступков",
      ],
    },
    {
      id: 3,
      text: "В способности человека узнавать предмет по его неполному или ошибочному изображению проявляется такое свойство восприятия, как … ",
      options: [
        "структурность ",
        "целостность",
        "константность",
        "предметность",
      ],
    },
    {
      id: 4,
      text: "Вопрос 4",
      options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  useEffect(() => {
    setTimeLeft(15);
  }, [currentQuestion]);

  const handleAnswer = (selectedOption: string) => {
    setAnswers([selectedOption]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswers([]);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => Math.max(0, prev - 1));
      setAnswers([]);
    }
  };

  const handleStopTest = () => {
    navigate("/main");
  };

  const handleConfirmAnswer = () => {
    handleNextQuestion();
  };
  const currentQuestionData = questions[currentQuestion];

  return (
    <Container>
      <ControlTestingText>
        Пробное тестрование / Раздел 2. Влияние психологической совместимости
        членов профессиональной группы на социально-психологический климат
        коллектива
      </ControlTestingText>
      <TestContainer>
        <Progress>
          Прогресс {currentQuestion + 1} из {questions.length} вопросов
        </Progress>
        <StatusLine>
          <CurrentStatus
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </StatusLine>

        {currentQuestionData && (
          <>
            <QuestionText>{currentQuestionData.text}</QuestionText>
            <Options>
              {currentQuestionData.options.map((option, index) => (
                <Option key={index} onClick={() => handleAnswer(option)}>
                  <RadioButton selected={answers.includes(option)}>
                    {answers.includes(option) && <Dot />}
                  </RadioButton>
                  {option}
                </Option>
              ))}
            </Options>
            <NavigationButtons>
              <button
                onClick={handleConfirmAnswer}
                disabled={answers.length === 0}
              >
                Подтвердить ответ
              </button>
              <ButtonContainer>
                <button
                  onClick={handlePrevQuestion}
                  disabled={
                    currentQuestion === questions.length - 1 || timeLeft === 0
                  }
                >
                  Предыдущий вопрос
                </button>
                <button onClick={handleStopTest} disabled={timeLeft === 0}>
                  Прекратить тест
                </button>
              </ButtonContainer>
            </NavigationButtons>
          </>
        )}
      </TestContainer>
    </Container>
  );
};

const ControlTestingText = styled.h2`
  width: 1225px;
  color: #cecece;
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  margin-top: 32px;
  margin-bottom: 60px;
`;
const TestContainer = styled.div`
  max-width: 1044px;
  margin: 0 auto;
`;

const Progress = styled.div`
  margin-bottom: 10px;
  text-align: center;
  color: #3c3c3c;
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
`;

const StatusLine = styled.div`
  height: 8px;
  background-color: #ededed;
  margin-bottom: 20px;
  border-radius: 12px;
`;

const CurrentStatus = styled.div`
  height: 100%;
  background-color: #3798cd;
  border-radius: 12px;
`;

const QuestionText = styled.div`
  width: 100%;
  color: #3c3c3c;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 20px;
  margin-bottom: 32px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  color: #3c3c3c;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
`;

const RadioButton = styled.div<{ selected: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #cecece;
  margin-right: 10px;
  background-color: ${(props) => (props.selected ? "transparent" : "none")};
  position: relative;
  padding: 7px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #3798cd;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-top: 80px;
    padding: 18px 34px;
    font-family: Raleway;
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
    background-color: white;
    color: #949494;
    border: 1px solid #949494;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      color: #3798cd;
      border: 1px solid #3798cd;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
