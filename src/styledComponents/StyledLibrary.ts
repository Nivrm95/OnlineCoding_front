import styled from "styled-components";

export const LibrarySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 391px) {
    height: 65vh;
  }
`;

export const LibraryContainer = styled.div`
  width: 951.86px;
  height: 645.46px;
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

