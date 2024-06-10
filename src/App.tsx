import "./App.css";
import GlobalStyle from "./style/GlobalStyle";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
