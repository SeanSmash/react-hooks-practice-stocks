import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;

/*
App
  Header
  MainContainer
    StockContainer
      Stock
    PortfolioContainer
      Stock
    SearchBar
    */