import styled from "styled-components";

export const RoomSection = styled.div`
    display: grid;
  width: 100%;
  height: 80%;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  grid-gap: 18px;
  overflow-y: scroll;
  justify-items: center;
    align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 391px) {
    width: 118%;
    height: 90%;
    padding: 12px;
  }
`;


export const MainCubePart = styled.div`
  position: absolute;
    display: flex;
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    width: 100%;
    height: 60px;
    top:20px;
`;



export const Cube = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: pointer;
  background-color: #6553b8;
  border: 2px solid;
  border-color:rgba(102, 219, 156, 1);
  border-radius: 8px;
  width: 145px;
  height: 130px;
  justify-content: flex-end;
  filter: drop-shadow(0px 0px 14.0061px rgba(0, 0, 0, 0.07));
  transition: 0.1s;
  &:hover {
    scale: 1.03;
  }
`;

export const CubeDescription = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 7px 8px;
    width: 100%;
    height: 30%;
    background-color: rgb(102, 219, 156);
    border-radius: 0px 0px 5.60244px 5.60244px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    color: white;
    margin-top: 34px;
`;
