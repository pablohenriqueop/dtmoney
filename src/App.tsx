import React from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Summary />
    </div>
  );
}
