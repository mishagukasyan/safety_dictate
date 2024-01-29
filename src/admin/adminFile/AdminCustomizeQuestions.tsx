import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const AdminCustomizeQuestions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestions, setNewQuestions] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questions, setQuestions] = useState([
    {
      question:
        "Признание самоценности личности, реализация внутренней и внешней свободы – это принцип ...",
      answers: ["гуманизма", "непрерывности", "демократизации", "целостности"],
    },
    {
      question: "Социальную перцепцию определяют как …",
      answers: [
        "процесс, включающий в себя выработку единой стратегии взаимодействия, восприятие и понимание другого человека",
        "восприятие внешних признаков человека, соотнесение их с его личностными характеристиками, интерпретацию и прогнозирование на этой основе его поступков",
        "речь, которая дополняется не только экспрессивными реакциями поведения, но и его семантикой, т.е. смыслом поступков",
        "",
      ],
    },
    {
      question:
        "В способности человека узнавать предмет по его неполному или ошибочному изображению проявляется такое свойство восприятия, как … ",
      answers: [
        "структурность",
        "целостность",
        "константность",
        "предметность",
      ],
    },
    {
      question:
        "Социально-психологический тренинг как способ повышения коммуникативной компетентности",
      answers: ["", "", "", ""],
    },
    {
      question: "Социальную перцепцию определяют как …",
      answers: ["", "", "", ""],
    },
  ]);

  const [selectedQuestionsIndex, setSelectedQuestionsIndex] = useState(null);

  const handleEditQuestions = (index: any) => {
    setSelectedQuestionsIndex(index);
    setIsModalOpen(true);
    const selectedQuestion = questions[index];
    setNewQuestions(selectedQuestion.question);
    setAnswer1(selectedQuestion.answers[0]);
    setAnswer2(selectedQuestion.answers[1]);
    setAnswer3(selectedQuestion.answers[2]);
    setAnswer4(selectedQuestion.answers[3]);
    // setCorrectAnswer(questions[index].correctAnswer || ""); исправить
  };

  const handleAddQuestions = () => {
    if (newQuestions.trim() === "" || correctAnswer.trim() === "") {
      return;
    }

    setQuestions((prevQuestions: any) => {
      const updatedQuestions = [...prevQuestions];

      if (
        selectedQuestionsIndex !== null &&
        typeof selectedQuestionsIndex === "number"
      ) {
        updatedQuestions[selectedQuestionsIndex] = {
          question: newQuestions,
          answers: [answer1, answer2, answer3, answer4],
          correctAnswer: correctAnswer,
        };
      } else {
        updatedQuestions.push({
          question: newQuestions,
          answers: [answer1, answer2, answer3, answer4],
          correctAnswer: correctAnswer,
        });
      }

      try {
        localStorage.setItem("testQuestions", JSON.stringify(updatedQuestions));
        console.log("Questions saved to localStorage:", updatedQuestions);
      } catch (error) {
        console.error("Ошибка при сохранении в localStorage:", error);
      }

      return updatedQuestions;
    });

    setIsModalOpen(false);
    setSelectedQuestionsIndex(null);
    setNewQuestions("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
    setCorrectAnswer("");
  };

  useEffect(() => {
    try {
      const storedQuestions = localStorage.getItem("testQuestions");
      if (storedQuestions) {
        setQuestions(JSON.parse(storedQuestions));
        console.log("Questions loaded from localStorage:", storedQuestions);
      }
    } catch (error) {
      console.error("Ошибка при загрузке из localStorage:", error);
    }
  }, []);

  return (
    <StyledCustomizeQuestions>
      <Button onClick={() => setIsModalOpen(true)}>Добавить вопрос</Button>
      <Line></Line>
      <Questions>
        <ul>
          {questions.map((item, index) => (
            <li key={index} onClick={() => handleEditQuestions(index)}>
              <p>{item.question}</p>
            </li>
          ))}
        </ul>
      </Questions>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <h2>Добавление нового вопроса</h2>
            <ModalWindowContent>
              <DropDownMenu>
                <h2>Раздел</h2>
                <DropDownSelect
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="option1">Раздел 1</option>
                  <option value="option2">Раздел 2</option>
                  <option value="option3">Раздел 3</option>
                  <option value="option4">Раздел 4</option>
                </DropDownSelect>
              </DropDownMenu>
              Описание
              <StyledInput
                type="text"
                placeholder="Введите название вопроса"
                value={newQuestions}
                onChange={(e) => setNewQuestions(e.target.value)}
              />
              Вариант ответа 1
              <StyledInput
                type="text"
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
              />
              Вариант ответа 2
              <StyledInput
                type="text"
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
              />
              Вариант ответа 3
              <StyledInput
                type="text"
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
              />
              Вариант ответа 4
              <StyledInput
                type="text"
                value={answer4}
                onChange={(e) => setAnswer4(e.target.value)}
              />
              <DropDownSelect
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              ></DropDownSelect>
            </ModalWindowContent>
            <AddButton onClick={handleAddQuestions}>
              {selectedQuestionsIndex !== null
                ? "Сохранить изменения"
                : "Добавить вопрос"}
            </AddButton>
          </ModalContent>
        </Modal>
      )}
    </StyledCustomizeQuestions>
  );
};

const StyledCustomizeQuestions = styled.div`
  padding: 48px 0 0 40px;
`;

const Button = styled.button`
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #3798cd;
  background: #fff;
  cursor: pointer;
  color: #3798cd;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 16px;
  :hover {
    background: #3798cd;
    color: #fff;
  }
`;

const Line = styled.div`
  width: 1048px;
  border: 1px solid #f7f7f7;
  padding: 20px 0 34px 0;
`;

const Questions = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      width: 1048px;
      padding: 28px 40px;
      align-items: center;
      border-radius: 30px;
      border: 1px solid #cecece;
      background: #f7f7f7;
      position: relative;
      :hover {
        cursor: pointer;
        border: 1px solid #3798cd;
        background: #f0faff;
      }
      p {
        max-width: 734px;
        color: #3c3c3c;
        font-size: 18px;
        font-weight: 400;
        line-height: 120%;
      }
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 1068px;
  height: auto;
  max-height: 80vh;
  background: #fff;
  padding: 60px 136px;
  border-radius: 10px;
  position: relative;
  text-align: center;
  overflow: auto;
`;

const DropDownMenu = styled.div`
  h2 {
    color: #3c3c3c;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
  }
`;

const DropDownSelect = styled.select`
  width: 796px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid #cecece;
  background: #fff;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  display: flex;
  width: 796px;
  padding: 14px 18px;
  align-items: flex-start;
  border-radius: 14px;
  border: 1px solid #cecece;
  background: #fff;
  margin: 20px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ModalWindowContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 40px;
  color: #3c3c3c;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: 1px solid #949494;
  color: #949494;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const AddButton = styled.button`
  padding: 16px 32px;
  align-items: center;
  border: none;
  border-radius: 12px;
  border: 1px solid #3798cd;
  background: #fff;
  color: #3798cd;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: #3798cd;
    color: #fff;
  }
`;
