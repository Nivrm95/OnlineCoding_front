import React from "react";
import "./HomePage.css";
import Library from "../../componnents/library/Library";
import Header from "../../componnents/header/Header";

const HomePage: React.FC = () => {
  return (
    <div className="pageFrame">
      <Header />
      <Library />
    </div>
  );
};

export default HomePage;
