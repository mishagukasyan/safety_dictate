import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Footer } from "./layout/footer/Footer";
import { Testing } from "./layout/testing/Testing";

function App() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      <Testing />
      <Footer />
    </div>
  );
}

export default App;
