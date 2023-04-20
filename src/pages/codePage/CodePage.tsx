import React from "react";
import {
  HeaderContainer,
  HeaderTitleSpan,
  LibraryContainer,
  LibrarySection,
} from "../../styledComponents/StyledLibrary";
import Header from "../../componnents/header/Header";
import CodeBlock from "../../componnents/codeBlock/CodeBlock";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CodePage: React.FC = () => {
  const navigate = useNavigate();
  const currentRoom = useSelector((state: RootState) => state.rooms.currentRoom);
  
  console.log(currentRoom);
  
  
  return (
    <div className="pageFrame">
      <Header />
      <LibrarySection>
        <LibraryContainer>
          <HeaderContainer>
              <button
                onClick={() => navigate("/")}
                style={{
                  all: "unset",
                  paddingTop: "15px",
                  cursor: "pointer",
                  color: "aliceblue",
                  marginRight: "730px",
                  marginBottom: "40px",
                  position:"absolute",
                }}
              >
                <img src="./icons/Close.svg" alt="go back" />
              </button>
            <HeaderTitleSpan>{currentRoom?.description} Room</HeaderTitleSpan>
          </HeaderContainer>
          <CodeBlock roomId={currentRoom ? currentRoom._id : ""} />
        </LibraryContainer>
      </LibrarySection>
    </div>
  );
};

export default CodePage;
