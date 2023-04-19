import React from "react";
import {
  HeaderContainer,
  HeaderTitleSpan,
  LibraryContainer,
  LibrarySection,
} from "../../styledComponents/StyledLibrary";
import Header from "../../componnents/header/Header";
import CodeBlock from "../../componnents/codeBlock/CodeBlock";

const CodePage: React.FC = () => {
  return (
    <div className="pageFrame">
      <Header />
      <LibrarySection>
        <LibraryContainer>
          <HeaderContainer>
            <HeaderTitleSpan>Start working</HeaderTitleSpan>
          </HeaderContainer>
            <CodeBlock />
        </LibraryContainer>
      </LibrarySection>
    </div>
  );
};

export default CodePage;
