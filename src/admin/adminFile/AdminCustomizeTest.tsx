import React, { useState } from "react";
import styled from "styled-components";

export const AdminCustomizeTestSections = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSection, setNewSection] = useState("");
  const [testSections, setTestSections] = useState([
    "Психологические факторы, оказывающие влияние на активность в политической сфере",
    "Влияние психологической совместимости членов профессиональной группы на социально-психологический климат коллектива",
    "Условия и механизмы формирования познавательных процессов представителей трех возрастов (дошкольное детство, младший школьный возраст, подростковый возраст)",
    "Социально-психологический тренинг как способ повышения коммуникативной компетентности",
  ]);

  const handleAddSection = () => {
    // Логика добавления раздела, например, отправка на сервер
    console.log("Добавлен новый раздел:", newSection);

    // Обновляем список разделов
    setTestSections((prevSections) => [...prevSections, newSection]);

    // Закрываем модальное окно
    setIsModalOpen(false);

    // Очищаем состояние нового раздела
    setNewSection("");
  };

  return (
    <StyledCustomizeSection>
      <Button onClick={() => setIsModalOpen(true)}>Добавить раздел</Button>
      <Line></Line>
      <Sections>
        <ul>
          {testSections.map((section, index) => (
            <li key={section}>
              <p>
                {index + 1}. {section}
              </p>
            </li>
          ))}
        </ul>
      </Sections>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <h2>Добавить новый раздел</h2>
            <input
              type="text"
              placeholder="Введите название раздела"
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
            />
            <AddButton onClick={handleAddSection}>Добавить</AddButton>
          </ModalContent>
        </Modal>
      )}
    </StyledCustomizeSection>
  );
};

const StyledCustomizeSection = styled.div`
  padding: 48px 0 0 40px;
`;

const Button = styled.button`
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #3798cd;
  background: #fff;
  cursor: pointer;
`;

const Line = styled.div`
  width: 1048px;
  border: 1px solid #f7f7f7;
  padding: 20px 0 34px 0;
`;

const Sections = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 34px;
    li {
      width: 1048px;
      padding: 28px 40px;
      align-items: center;
      border-radius: 30px;
      border: 1px solid #cecece;
      background: #f7f7f7;
      position: relative;

      &::before {
        content: "Раздел " counter(sectionCounter);
        counter-increment: sectionCounter;
        position: absolute;
        top: -20px;
        left: 0;
        font-weight: bold;
      }

      p {
        max-width: 734px;
        margin-top: 10px;
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
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #3798cd;
  color: #fff;
  cursor: pointer;
`;
