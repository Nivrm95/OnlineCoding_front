import React, { useEffect } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Library from "../../componnents/library/Library";

const HomePage: React.FC = () => { 
  return (
    <div className="pageFrame">
      
      <Library />
    </div>
  );
};

export default HomePage;
