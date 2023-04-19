// import React from "react";
// import { Cube, CubeDescription, MainCubePart } from "../../styledComponents/StyledRoom";


// const RoomList: React.FC = () => {
//   return (
//     <>
//       <Cube>
//         <MainCubePart>
//           <img src="./icons/Code.svg" alt="room icon" />
//         </MainCubePart>
//         <CubeDescription>Arrays</CubeDescription>
//       </Cube>
//       <Cube>
//         <MainCubePart>
//           <img src="./icons/Code.svg" alt="room icon" />
//         </MainCubePart>
//         <CubeDescription>Objects</CubeDescription>
//       </Cube>
//       <Cube>
//         <MainCubePart>
//           <img src="./icons/Code.svg" alt="room icon" />
//         </MainCubePart>
//         <CubeDescription>Components</CubeDescription>
//       </Cube>
//       <Cube>
//         <MainCubePart>
//           <img src="./icons/Code.svg" alt="room icon" />
//         </MainCubePart>
//         <CubeDescription>Functions</CubeDescription>
//       </Cube>
//     </>
//   );
// };

// export default RoomList;




import React from "react";
import { useNavigate } from "react-router-dom";
import { Cube, CubeDescription, MainCubePart } from "../../styledComponents/StyledRoom";

const RoomList: React.FC = () => {
    const navigat = useNavigate();
 
  return (
    <>
      <Cube onClick={() => navigat("/CodePage")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Arrays</CubeDescription>
      </Cube>
      <Cube onClick={() => navigat("/CodePage")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Objects</CubeDescription>
      </Cube>
      <Cube onClick={() => navigat("/CodePage")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Components</CubeDescription>
      </Cube>
      <Cube onClick={() => navigat("/CodePage")}>
        <MainCubePart>
          <img src="./icons/Code.svg" alt="room icon" />
        </MainCubePart>
        <CubeDescription>Functions</CubeDescription>
      </Cube>
    </>
  );
};

export default RoomList;
























// db
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Cube, CubeDescription, MainCubePart } from "../../styledComponents/StyledRoom";
// import { getRoomsStart } from "../../store/slices/roomSlice";

// interface RootState {
//   rooms: {
//     loading: boolean;
//     error: string | null;
//     data: Room[];
//   };
// }

// const RoomList: React.FC = () => {
//   const dispatch = useDispatch();
//   const rooms = useSelector((state: RootState) => state.rooms.data);

//   useEffect(() => {
//     dispatch(getRoomsStart());
//   }, [dispatch]);

//   return (
//     <>
//       {rooms.map((room) => (
//         <Cube key={room._id}>
//           <MainCubePart>
//             <img src={room.icon} alt="room icon" />
//           </MainCubePart>
//           <CubeDescription>{room.name}</CubeDescription>
//         </Cube>
//       ))}
//     </>
//   );
// };

// export default RoomList;