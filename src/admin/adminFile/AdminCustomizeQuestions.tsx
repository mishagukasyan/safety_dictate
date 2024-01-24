import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const AdminCustomizeQuestions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestions, setNewQuestions] = useState("");
  const [testQuestions, setTestQuestions] = useState(() => {
    try {
      const storedQuestions = localStorage.getItem("testQuestions");
      if (storedQuestions) {
        return JSON.parse(storedQuestions);
      } else {
        const initialQuestions = [
          "Признание самоценности личности, реализация внутренней и внешней свободы – это принцип ... ",
          "Социальную перцепцию определяют как …",
          "В способности человека узнавать предмет по его неполному или ошибочному изображению проявляется такое свойство восприятия, как …",
          "Социально-психологический тренинг как способ повышения коммуникативной компетентности",
          "Признание самоценности личности, реализация внутренней и внешней свободы – это принцип ...",
        ];
        localStorage.setItem("testQuestions", JSON.stringify(initialQuestions));
        return initialQuestions;
      }
    } catch (error) {
      console.error("Ошибка при восстановлении из localStorage:", error);
      return [];
    }
  });

  const [selectedQuestionsIndex, setSelectedQuestionsIndex] = useState(null);

  const handleEditQuestions = (index: any) => {
    setSelectedQuestionsIndex(index);
    setNewQuestions(testQuestions[index]);
    setIsModalOpen(true);
  };

  const handleAddQuestions = () => {
    if (newQuestions.trim() === "") {
      return;
    }

    setTestQuestions((prevQuestions: any) => {
      const updatedQuestions = [...prevQuestions];

      if (
        selectedQuestionsIndex !== null &&
        typeof selectedQuestionsIndex === "number"
      ) {
        updatedQuestions[selectedQuestionsIndex] = newQuestions;
      } else {
        updatedQuestions.push(newQuestions);
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
  };

  return (
    <StyledCustomizeQuestions>
      <Button onClick={() => setIsModalOpen(true)}>Добавить вопрос</Button>
      <Line></Line>
      <Questions>
        <ul>
          {testQuestions.map((section: string, index: number) => (
            <li key={section} onClick={() => handleEditQuestions(index)}>
              <p>{section}</p>
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
              Описание
              <StyledInput
                type="text"
                placeholder="Введите название вопроса"
                value={newQuestions}
                onChange={(e) => setNewQuestions(e.target.value)}
              />
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
  height: 450px;
  background: #fff;
  padding: 60px 136px;
  border-radius: 10px;
  position: relative;
  text-align: center;
`;

const StyledInput = styled.input`
  display: flex;
  width: 796px;
  padding: 14px 18px;
  align-items: flex-start;
  border-radius: 14px;
  border: 1px solid #cecece;
  background: #fff;
  margin-bottom: 160px;
  margin-top: 8px;
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
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  border: 1px solid #3798cd;
  background: #fff;
  color: #3798cd;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  cursor: pointer;
  :hover {
    background: #3798cd;
    color: #fff;
  }
`;
