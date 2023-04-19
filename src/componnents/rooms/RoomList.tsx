import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Cube,
  CubeDescription,
  MainCubePart,
} from "../../styledComponents/StyledRoom";

export interface IRoomsState {
  value: IRoomsProps[];
}

export interface IRoomsProps {
  _id: string;
  name: number;
  icon: string;
  description: string;
}

const RoomList: React.FC = () => {
  const navigate = useNavigate();

  const handleCubeClick = (description: string) => {
    navigate("/CodePage", { state: { description } });
  };

  return (
    <>
      <Cube onClick={() => handleCubeClick("Arrays")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Arrays</CubeDescription>
      </Cube>
      <Cube onClick={() => handleCubeClick("Objects")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Objects</CubeDescription>
      </Cube>
      <Cube onClick={() => handleCubeClick("Components")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Components</CubeDescription>
      </Cube>
      <Cube onClick={() => handleCubeClick("Functions")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Functions</CubeDescription>
      </Cube>
    </>
  );
};

export default RoomList;


//////////////////////////////////////////////////////////////////////////axios//////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Cube, CubeDescription, MainCubePart } from "../../styledComponents/StyledRoom";
// import { RootState } from "../../store/store";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { IRooms } from "../../store/slices/roomSlice";
// import { getRoomsData } from "../../store/slices/roomSlice";
// import axios from "axios";

// const RoomList: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const rooms: IRooms[] = useSelector((state: RootState) => state.rooms.allRooms);
//   const [isLoading, setIsLoading] = useState(false);
// console.log(rooms);

//   const fetchRoomsData = async () => {
//     setIsLoading(true);
//     try {
//       const roomsData = await axios.get("https://localhost:8000/rooms");
//       dispatch(getRoomsData(roomsData.data));
//       console.log(roomsData.data.data);
//     } catch (error: any) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRoomsData();
//   }, []);

//   return (
//     <>
//       {isLoading && <div>Loading...</div>}
//       {!isLoading && rooms.map((room) => (
//         <Cube key={room._id} onClick={() => navigate(`/CodePage}`)}>
//           <MainCubePart>
//             <img src={room.icon} alt="room icon" />
//           </MainCubePart>
//           <CubeDescription>{room.description}</CubeDescription>
//         </Cube>
//       ))}
//     </>
//   );
// };

// export default RoomList;