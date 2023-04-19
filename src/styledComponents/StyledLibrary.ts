import styled from "styled-components";

export const LibrarySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  @media (max-width: 391px) {
    height: 65vh;
  }
`;

export const LibraryContainer = styled.div`
  width: 800px;
  height:500px;
  background-color: #2d2b52;
  border-radius: 21.3559px;
  box-shadow: 0px 4.74576px 30.8475px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 391px) {
    height: 500px;
    width: 350px;
  }
`;

export const HeaderContainer = styled.div`
  background-color: #39375e;
  border-top-left-radius: 21.3559px;
  border-top-right-radius: 21.3559px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

`;

export const HeaderTitleSpan = styled.span`
  font-family: "Poppins";
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  text-transform: capitalize;
  letter-spacing: 1px;
  @media (max-width: 391px) {
    font-size: 25px;
  }
`;