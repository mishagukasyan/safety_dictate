import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Footer } from "./layout/footer/Footer";
import { Testing } from "./layout/testing/Testing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>

        {/* <Main /> */}
        {/* <Testing /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
