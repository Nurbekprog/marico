import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stepone from "./components/step1/Stepone";
import Steptwo from "./components/step2/Steptwo";
import Stepthree from "./components/step3/Steptree";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Stepone />
      <Steptwo />
      <Stepthree />
    </div>
  );
};

export default App;
