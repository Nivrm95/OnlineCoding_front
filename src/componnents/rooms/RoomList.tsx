import React from "react";
import { Cube, CubeDescription, MainCubePart } from "../../styledComponents/StyledRoom";


const RoomList: React.FC = () => {
  return (
    <>
      <Cube>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>sssss</CubeDescription>
      </Cube>
      <Cube>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>sssss</CubeDescription>
      </Cube>
      <Cube>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>sssss</CubeDescription>
      </Cube>
      <Cube>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>sssss</CubeDescription>
      </Cube>
    </>
  );
};

export default RoomList;