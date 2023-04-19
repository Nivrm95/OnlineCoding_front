import React from "react";
import { useNavigate } from "react-router-dom";
    
const Header: React.FC = () => {
    const navigat = useNavigate();
  return (
      <header>
        <div style={{ height: "60px", width: "200px" , cursor: "pointer"}}>
          <img
            src="./logo/logo.png"
            alt="main logo"
            style={{ height: "100%", width: "100%" }}
            onClick={() => navigat("/")}
          />
        </div>
      </header>
  );
};

export default Header;
