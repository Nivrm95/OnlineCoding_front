import React from "react";
import "./HomePage.css";
import Library from "../../componnents/library/Library";


const HomePage: React.FC = () => {
  return (
    <div className="pageFrame">
      <header>
      </header>
      <Library />
    </div>
  );
};

export default HomePage;
