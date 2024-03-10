import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stepone from "./components/step1/Stepone";
import Steptwo from "./components/step2/Steptwo";
import Stepthree from "./components/step3/Steptree";
import Experts from "./components/experts/Experts";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Stepone />
      <Steptwo />
      <Stepthree />
      <Experts />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
