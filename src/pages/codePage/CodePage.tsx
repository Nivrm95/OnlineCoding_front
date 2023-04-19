// import React from "react";
// import {
//   HeaderContainer,
//   HeaderTitleSpan,
//   LibraryContainer,
//   LibrarySection,
// } from "../../styledComponents/StyledLibrary";
// import Header from "../../componnents/header/Header";
// import CodeBlock from "../../componnents/codeBlock/CodeBlock";

// const CodePage: React.FC = () => {
//   return (
//     <div className="pageFrame">
//       <Header />
//       <LibrarySection>
//         <LibraryContainer>
//           <HeaderContainer>
//             <HeaderTitleSpan>Start working</HeaderTitleSpan>
//           </HeaderContainer>
//             <CodeBlock />
//         </LibraryContainer>
//       </LibrarySection>
//     </div>
//   );
// };

// export default CodePage;

import React from "react";
import {
  HeaderContainer,
  HeaderTitleSpan,
  LibraryContainer,
  LibrarySection,
} from "../../styledComponents/StyledLibrary";
import Header from "../../componnents/header/Header";
import CodeBlock from "../../componnents/codeBlock/CodeBlock";
import { useLocation, useNavigate } from "react-router-dom";

const CodePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const description = location.state?.description ?? "";

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
            <HeaderTitleSpan>{description} Room</HeaderTitleSpan>
          </HeaderContainer>
          <CodeBlock />
        </LibraryContainer>
      </LibrarySection>
    </div>
  );
};

export default CodePage;
