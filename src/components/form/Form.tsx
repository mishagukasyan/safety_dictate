import React, { useState } from "react";
import styled from "styled-components";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    region: "",
    city: "",
    email: "",
    id: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "age") {
      const ageValue = parseInt(value, 10);
      if (isNaN(ageValue) || ageValue <= 0) {
        setFormData({ ...formData, [name]: "" });
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Отправленная форма:", formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Имя:</Label>
          <Input
            placeholder="Иван Иванов"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <RowContainer>
          <FormGroup>
            <Label htmlFor="age">Возраст:</Label>
            <Input
              placeholder="25"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gender">Пол:</Label>
            <Select
              placeholder="М"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="male">М</option>
              <option value="female">Ж</option>
            </Select>
          </FormGroup>
        </RowContainer>

        <FormGroup>
          <Label htmlFor="region">Регион (область):</Label>
          <Input
            placeholder="Московская область"
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">Город:</Label>
          <Input
            placeholder="г. Одинцово"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Почта:</Label>
          <Input
            placeholder="ivanov2023@mail.ru"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">
            Идентификатор <span>(Необязательное поле)</span>
          </Label>
          <Input
            placeholder="1209830"
            type="id"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </FormGroup>
        <ButtonContainer>
          <Button type="submit">
            <a href="/testpage">Начать тест</a>{" "}
          </Button>
          <h2>
            Нажимая кнопку “Начать тест”, Вы принимаете{" "}
            <a href="#">условия сервиса</a>{" "}
          </h2>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 524px;
  width: 100%;
  margin: 0 auto;
`;

const FormGroup = styled.div``;

const RowContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  span {
    color: #949494;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 18px;
  font-size: 16px;
  border-radius: 14px;
  border: 1px solid #cecece;
  margin-bottom: 40px;
`;

const Select = styled.select`
  width: 100%;
  padding: 18px;
  font-size: 16px;
  border-radius: 14px;
  border: 1px solid #cecece;
`;

const Button = styled.button`
  padding: 18px 34px;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  background-color: #3798cd;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 40px;
  padding-left: 25px;
  h2 {
    width: 218px;
    color: #3c3c3c;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
  }
  a {
    color: #3c3c3c;
    text-decoration-line: underline;
  }
`;
