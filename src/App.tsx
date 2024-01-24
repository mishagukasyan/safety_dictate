import "./App.css";
import { Main } from "./layout/main/Main";
import { Testing } from "./layout/testing/Testing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestPage } from "./layout/testing/testPage/TestPage";
import { Training } from "./layout/training/Training";
import { TestSectionPage1 } from "./layout/training/trainingTestSection/TestSectionPage1";
import { TestSectionPage2 } from "./layout/training/trainingTestSection/TestSectionPage2";
import { TestSectionPage3 } from "./layout/training/trainingTestSection/TestSectionPage3";
import { TestSectionPage4 } from "./layout/training/trainingTestSection/TestSectionPage4";
import { AboutTheProject } from "./layout/aboutProject/AboutTheProject";
import { AdminDashboard } from "./admin/AdminDashboard";
import { AdminPanel } from "./admin/adminFile/AdminPanel";
import { AdminCustomizeTestSections } from "./admin/adminFile/AdminCustomizeTest";
import { TestResultPageWin } from "./layout/testing/testResultPage/TestResultPageWin";
import { TestResultPageFailed } from "./layout/testing/testResultPage/TestResultPageFailed";
import { ReportComponent } from "./admin/adminFile/ReportComponent";
import { Layout } from "./components/Layout";
import { AdminCustomizeQuestions } from "./admin/adminFile/AdminCustomizeQuestions";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/main" element={<Main />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/testpage" element={<TestPage />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about_project" element={<AboutTheProject />} />
            <Route path="/testSectionPage1" element={<TestSectionPage1 />} />
            <Route path="/testSectionPage2" element={<TestSectionPage2 />} />
            <Route path="/testSectionPage3" element={<TestSectionPage3 />} />
            <Route path="/testSectionPage4" element={<TestSectionPage4 />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="adminReport/*" element={<AdminPanel />}>
              <Route path="adminReport" element={<ReportComponent />} />
              <Route
                path="customiseTestSection"
                element={<AdminCustomizeTestSections />}
              />
              <Route
                path="customiseTestQuestions"
                element={<AdminCustomizeQuestions />}
              />
            </Route>

            <Route
              path="/resultWin"
              element={<TestResultPageWin result="" />}
            />
            <Route
              path="/resultFailed"
              element={<TestResultPageFailed result="" />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
