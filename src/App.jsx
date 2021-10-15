import React from "react";
import Decider from "./components/Decider";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <h1 data-cy="greeting">Hello there</h1>
      <Decider />
      <Footer />
    </div>
  );
};

export default App;
