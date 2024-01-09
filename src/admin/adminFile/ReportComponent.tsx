import React, { useState } from "react";
import styled from "styled-components";

export const ReportComponent = () => {
  // Состояния для фильтров
  const [age, setAge] = useState(false);
  const [gender, setGender] = useState(false);
  const [region, setRegion] = useState(false);
  const [city, setCity] = useState(false);

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

  // Обработчик нажатия на кнопку "Скачать"
  const handleDownload = () => {
    // Здесь можно добавить логику для скачивания отчета
    // Например, формирование запроса на сервер с выбранными фильтрами и периодом
    // Затем сервер отправляет отчет в виде файла, который браузер скачивает
    alert("Отчет скачан!");
  };

  return (
    <StyledReportComponent>
      {/* Фильтры */}
      <h2>Выберите фильтры</h2>
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
      </StyledFilter>
      {/* Период */}
      <h2>Укажите период</h2>
      <div>
        <label>
          От
          <input
            type="date"
            value={startDate}
            onChange={(e) => handleDateChange("startDate", e.target.value)}
          />
        </label>
        <label>
          До
          <input
            type="date"
            value={endDate}
            onChange={(e) => handleDateChange("endDate", e.target.value)}
          />
        </label>
      </div>
      {/* Кнопка "Скачать" */}
      <button onClick={handleDownload}>Скачать отчет</button>
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
`;

const StyledFilter = styled.div`
  display: flex;
  gap: 16px;
`;
const FilterButton = styled.button`
  border-radius: 12px;
  border: 1px solid #3798cd;
  background: #fff;
  padding: 18px;
  cursor: pointer;
`;
