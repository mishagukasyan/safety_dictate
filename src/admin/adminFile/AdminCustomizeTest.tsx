import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const AdminCustomizeTestSections = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSection, setNewSection] = useState("");
  const [testSections, setTestSections] = useState(() => {
    try {
      const storedSections = localStorage.getItem("testSections");
      if (storedSections) {
        return JSON.parse(storedSections);
      } else {
        const initialSections = [
          "Психологические факторы, оказывающие влияние на активность в политической сфере",
          "Влияние психологической совместимости членов профессиональной группы на социально-психологический климат коллектива",
          "Условия и механизмы формирования познавательных процессов представителей трех возрастов (дошкольное детство, младший школьный возраст, подростковый возраст)",
          "Социально-психологический тренинг как способ повышения коммуникативной компетентности",
        ];
        localStorage.setItem("testSections", JSON.stringify(initialSections));
        return initialSections;
      }
    } catch (error) {
      console.error("Ошибка при восстановлении из localStorage:", error);
      return [];
    }
  });

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

  const handleEditSection = (index: any) => {
    setSelectedSectionIndex(index);
    setNewSection(testSections[index]);
    setIsModalOpen(true);
  };

  const handleAddSection = () => {
    if (newSection.trim() === "") {
      return;
    }

    setTestSections((prevSections: any) => {
      const updatedSections = [...prevSections];

      if (
        selectedSectionIndex !== null &&
        typeof selectedSectionIndex === "number"
      ) {
        updatedSections[selectedSectionIndex] = newSection;
      } else {
        updatedSections.push(newSection);
      }

      try {
        localStorage.setItem("testSections", JSON.stringify(updatedSections));
        console.log("Sections saved to localStorage:", updatedSections);
      } catch (error) {
        console.error("Ошибка при сохранении в localStorage:", error);
      }

      return updatedSections;
    });

    setIsModalOpen(false);
    setSelectedSectionIndex(null);
    setNewSection("");
  };

  return (
    <StyledCustomizeSection>
      <Button onClick={() => setIsModalOpen(true)}>Добавить раздел</Button>
      <Line></Line>
      <Sections>
        <ul>
          {testSections.map((section: string, index: number) => (
            <li key={section} onClick={() => handleEditSection(index)}>
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
            <h2>Добавление нового раздела</h2>
            <ModalWindowContent>
              Описание
              <StyledInput
                type="text"
                placeholder="Введите название раздела"
                value={newSection}
                onChange={(e) => setNewSection(e.target.value)}
              />
            </ModalWindowContent>
            <AddButton onClick={handleAddSection}>
              {selectedSectionIndex !== null
                ? "Сохранить изменения"
                : "Добавить раздел"}
            </AddButton>
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
