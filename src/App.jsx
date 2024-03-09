import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stepone from "./components/step1/Stepone";
import Steptwo from "./components/step2/Steptwo";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Stepone />
      <Steptwo />
    </div>
  );
};

export default App;
