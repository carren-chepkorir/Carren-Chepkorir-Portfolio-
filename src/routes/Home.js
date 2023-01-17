import React from "react";
import AboutSection from "../components/AboutSection";
import DisplayWork from "../components/DisplayWork";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Main from "../components/Main";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <AboutSection />

      <Technologies />
      <DisplayWork />
      <Footer />
    </div>
  );
};

export default Home;
