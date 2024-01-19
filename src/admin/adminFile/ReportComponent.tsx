import React, { useState } from "react";
import styled from "styled-components";

export const ReportComponent = () => {
  // Состояния для фильтров
  const [age, setAge] = useState(false);
  const [gender, setGender] = useState(false);
  const [region, setRegion] = useState(false);
  const [city, setCity] = useState(false);
  const [identeficator, setIdenteficator] = useState(false);

  // Состояния для периода от и до
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Обработчик фильтров
  const handleFilterChange = (filterName: string) => {
    switch (filterName) {
      case "age":
        setAge(!age);
        break;
      case "gender":
        setGender(!gender);
        break;
      case "region":
        setRegion(!region);
        break;
      case "city":
        setCity(!city);
        break;
      case "identeficator":
        setIdenteficator(!identeficator);
        break;
      default:
        break;
    }
  };

  // Обработчик периода
  const handleDateChange = (dateName: string, value: string) => {
    switch (dateName) {
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      default:
        break;
    }
  };

  const handleDownload = () => {
    alert("Отчет скачан!");
  };

  return (
    <StyledReportComponent>
      {/* Фильтры */}
      <StyledText>Выберите фильтры</StyledText>
      <StyledFilter>
        <FilterButton
          className={age ? "selected" : ""}
          onClick={() => handleFilterChange("age")}
        >
          Возраст
        </FilterButton>
        <FilterButton
          className={gender ? "selected" : ""}
          onClick={() => handleFilterChange("gender")}
        >
          Пол
        </FilterButton>
        <FilterButton
          className={region ? "selected" : ""}
          onClick={() => handleFilterChange("region")}
        >
          Регион(Область)
        </FilterButton>
        <FilterButton
          className={city ? "selected" : ""}
          onClick={() => handleFilterChange("city")}
        >
          Город
        </FilterButton>
        <FilterButton
          className={identeficator ? "selected" : ""}
          onClick={() => handleFilterChange("identeficator")}
        >
          Идентификатор
        </FilterButton>
      </StyledFilter>
      {/* Период */}
      <StyledText>Укажите период</StyledText>
      <StyledDataWrapper>
        <StyledLabel>
          От
          <StyledInput
            type="date"
            value={startDate}
            onChange={(e) => handleDateChange("startDate", e.target.value)}
          />
        </StyledLabel>
        <StyledLabel>
          До
          <StyledInput
            type="date"
            value={endDate}
            onChange={(e) => handleDateChange("endDate", e.target.value)}
          />
        </StyledLabel>
      </StyledDataWrapper>

      <StyledButtonDownload onClick={handleDownload}>
        Скачать
      </StyledButtonDownload>
    </StyledReportComponent>
  );
};

const StyledReportComponent = styled.div`
  display: flex;
  padding: 70px 223px 70px 140px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  border-radius: 80px;
  background: #f5f5f5;
  margin-left: 40px;
`;

const StyledText = styled.h2`
  color: #3c3c3c;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 110%;
`;

const StyledFilter = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledDataWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const FilterButton = styled.button`
  border-radius: 12px;
  border: ${({ className }) =>
    className && className.includes("selected")
      ? "1px solid #3798cd"
      : "1px solid #949494"};
  background: #fff;
  padding: 18px;
  cursor: pointer;
  color: ${({ className }) =>
    className && className.includes("selected") ? "#3798CD" : "#949494"};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #3c3c3c;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
`;

const StyledInput = styled.input`
  border-radius: 14px;
  border: 1px solid #cecece;
  background: #fff;
  padding: 18px;
  box-sizing: border-box;
`;

const StyledButtonDownload = styled.button`
  display: flex;
  padding: 18px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: #3798cd;
  cursor: pointer;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
`;
