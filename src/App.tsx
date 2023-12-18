import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Footer } from "./layout/footer/Footer";
import { Testing } from "./layout/testing/Testing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestPage } from "./layout/testing/testPage/TestPage";
import { Training } from "./layout/training/Training";
import { TestSectionPage1 } from "./layout/training/trainingTestSection/TestSectionPage1";
import { TestSectionPage2 } from "./layout/training/trainingTestSection/TestSectionPage2";
import { TestSectionPage3 } from "./layout/training/trainingTestSection/TestSectionPage3";
import { TestSectionPage4 } from "./layout/training/trainingTestSection/TestSectionPage4";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/training" element={<Training />} />
          <Route path="/testSectionPage1" element={<TestSectionPage1 />} />
          <Route path="/testSectionPage2" element={<TestSectionPage2 />} />
          <Route path="/testSectionPage3" element={<TestSectionPage3 />} />
          <Route path="/testSectionPage4" element={<TestSectionPage4 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
