import React from "react";
import {
  HeaderContainer,
  HeaderTitleSpan,
  LibraryContainer,
  LibrarySection,
} from "../../styledComponents/StyledLibrary";
import Header from "../../componnents/header/Header";

const CodePage: React.FC = () => {
  return (
    <div className="pageFrame">
      <Header />
      <LibrarySection>
        <LibraryContainer>
          <HeaderContainer>
            <HeaderTitleSpan>Start working</HeaderTitleSpan>
          </HeaderContainer>
        </LibraryContainer>
      </LibrarySection>
    </div>
  );
};

export default CodePage;
