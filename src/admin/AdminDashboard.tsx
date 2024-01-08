import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Пример простой проверки логина и пароля
    if (login === "admin" && password === "admin") {
      setIsLoggedIn(true);

      // Перенаправление на новую страницу
      navigate("/adminReport");
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Container>
      <StyledAdminDashboard>
        <StyledMainText>Вход</StyledMainText>
        <FormDashboard>
          <Label>
            Логин:
            <input
              placeholder="AdminAdmin"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Label>

          <Label>
            Пароль:
            <input
              placeholder="Password2023"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </Label>
        </FormDashboard>
      </StyledAdminDashboard>
    </Container>
  );
};

const StyledAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 640px;
`;

const StyledMainText = styled.h2`
  color: #3c3c3c;
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 32px;
`;

const FormDashboard = styled.form`
  display: flex;
  width: 640px;
  flex-direction: column;
  padding: 60px 120px 80px 120px;
  gap: 34px;
  align-items: center;
  border-radius: 60px;
  background: #f5f5f5;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  input {
    width: 400px;
    padding: 18px 10px 18px 18px;
    align-items: center;
    border-radius: 14px;
    border: 1px solid #cecece;
    background: #fff;
  }
`;
