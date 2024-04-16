import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { useNavigate } from "react-router-dom";

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
};

export const TestPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const [testResult, setTestResult] = useState<"passed" | "failed" | null>(
    null
  );
  const navigate = useNavigate();

  const questions: Question[] = [
    {
      id: 1,
      text: "Признание самоценности личности, реализация внутренней и внешней свободы – это принцип ... ",
      options: ["гуманизма", "непрерывности", "демократизации", "целостности"],
      correctAnswer: "гуманизма",
    },
    {
      id: 2,
      text: "Социальную перцепцию определяют как …?",
      options: [
        "процесс, включающий в себя выработку единой стратегии взаимодействия, восприятие и понимание другого человека ",
        "восприятие внешних признаков человека, соотнесение их с его личностными характеристиками, интерпретацию и прогнозирование на этой основе его поступков",
        "речь, которая дополняется не только экспрессивными реакциями поведения, но и его семантикой, т.е. смыслом поступков",
      ],
      correctAnswer:
        "восприятие внешних признаков человека, соотнесение их с его личностными характеристиками, интерпретацию и прогнозирование на этой основе его поступков",
    },
    {
      id: 3,
      text: "В способности человека узнавать предмет по его неполному или ошибочному изображению проявляется такое свойство восприятия, как … ",
      options: [
        "структурность",
        "целостность",
        "константность",
        "предметность",
      ],
      correctAnswer: "структурность",
    },
    {
      id: 4,
      text: "Вопрос 4",
      options: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
      correctAnswer: "Ответ 1",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearInterval(timer);
      if (currentQuestion === questions.length - 1) {
        const correctAnswers = questions.reduce((acc, question) => {
          const isCorrect = answers.includes(question.correctAnswer);

          return acc + (isCorrect ? 1 : 0);
        }, 0);
        const percentage = (correctAnswers / questions.length) * 100;
        setTestResult(percentage >= 50 ? "passed" : "failed");
      }
    };
  }, [currentQuestion, answers, questions.length]);

  useEffect(() => {
    setTimeLeft(15);
  }, [currentQuestion]);

  const handleAnswer = (selectedOption: string) => {
    answers.includes(selectedOption);

    setAnswers([...answers, selectedOption]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const correctAnswers = questions.reduce((acc, question) => {
        const isCorrect = answers.includes(question.correctAnswer);

        return acc + (isCorrect ? 1 : 0);
      }, 0);
      const percentage = (correctAnswers / questions.length) * 100;
      setTestResult(percentage >= 50 ? "passed" : "failed");
    }
  };

  const handleStopTest = () => {
    setTestResult("failed");
  };

  const currentQuestionData = questions[currentQuestion];
  useEffect(() => {
    testResult !== null &&
      (testResult === "passed"
        ? navigate("/resultWin")
        : navigate("/resultFailed"));
  }, [testResult]);

  return (
    <Container>
      <ControlTestingText>Контрольное тестирование</ControlTestingText>
      <TestContainer>
        <Progress>
          Прогресс: {currentQuestion + 1} из {questions.length} вопросов
        </Progress>
        <StatusLine>
          <CurrentStatus
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </StatusLine>
        <Timer>
          <span>
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
            {String(timeLeft % 60).padStart(2, "0")}
          </span>
        </Timer>
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
                onClick={handleNextQuestion}
                disabled={
                  currentQuestion === questions.length - 1 || timeLeft === 0
                }
              >
                Следующий вопрос
              </button>
              <button onClick={handleStopTest} disabled={timeLeft === 0}>
                Прекратить тест
              </button>
            </NavigationButtons>
          </>
        )}
      </TestContainer>
    </Container>
  );
};

const ControlTestingText = styled.h2`
  color: #cecece;
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  margin-top: 32px;
  margin-bottom: 60px;
`;
const TestContainer = styled.div`
  max-width: 1044px;
  // margin: 0 auto;
`;

const Progress = styled.div`
  margin-bottom: 10px;
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

const Timer = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  color: #3c3c3c;
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  text-align: center;
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
