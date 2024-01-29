import React, { useState } from "react";
import styled from "styled-components";

export const ReportComponent = () => {
  const [ageRange, setAgeRange] = useState({ min: 18, max: 60 });
  const [gender, setGender] = useState(false);
  const [region, setRegion] = useState(false);
  const [city, setCity] = useState(false);
  const [identeficator, setIdenteficator] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterChange = (filterName: string) => {
    switch (filterName) {
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

  const handleAgeRangeChange = (type: "min" | "max", value: number) => {
    setAgeRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
  };

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
      <StyledText>Выберите фильтры</StyledText>
      <StyledFilter>
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
      <AgeRangeWrapper>
        <StyledText>Введите возраст респондента</StyledText>
        <StyledInputWrapper>
          <StyledLabel>
            От
            <StyledAgeInput
              type="number"
              placeholder="От"
              value={ageRange.min}
              onChange={(e) =>
                handleAgeRangeChange("min", parseInt(e.target.value))
              }
            />
          </StyledLabel>
          <StyledLabel>
            До
            <StyledAgeInput
              type="number"
              placeholder="До"
              value={ageRange.max}
              onChange={(e) =>
                handleAgeRangeChange("max", parseInt(e.target.value))
              }
            />
          </StyledLabel>
        </StyledInputWrapper>
      </AgeRangeWrapper>
      <StyledText>Укажите период</StyledText>
      <StyledInputWrapper>
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
      </StyledInputWrapper>

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
  gap: 20px;
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
  margin: 20px 0 20px 0;
`;

const StyledFilter = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledInputWrapper = styled.div`
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

const AgeRangeWrapper = styled.div``;

const StyledAgeInput = styled.input`
  width: 60px;
  border-radius: 14px;
  border: 1px solid #cecece;
  background: #fff;
  padding: 14px;
  box-sizing: border-box;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #949494;
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
