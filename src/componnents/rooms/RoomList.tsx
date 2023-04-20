import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cube, CubeDescription, MainCubePart } from "../../styledComponents/StyledRoom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IRoom } from "../../store/slices/roomSlice";
import { getRoomsData, setCurrentRoom } from "../../store/slices/roomSlice";
import axios from "axios";

const RoomList: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rooms = useSelector((state: RootState) => state.rooms.allRooms);
  const [isLoading, setIsLoading] = useState(false);


  const fetchRoomsData = async () => {
    setIsLoading(true);
    try {
      const roomsData = await axios.get("http://localhost:8000/rooms");
      dispatch(getRoomsData(roomsData.data));
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRoomsData();
  }, []);

  const handleSelectRoom = (room: IRoom) => {
    dispatch(setCurrentRoom(room));
    navigate("/CodePage");
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && rooms.map((room:IRoom) => (
        <Cube key={room._id} onClick={() => handleSelectRoom(room)}>
          <MainCubePart>
            <img src={room.icon} alt="room icon" />
          </MainCubePart>
          <CubeDescription>{room.description}</CubeDescription>
        </Cube>
      ))}
    </>
  );
};

export default RoomList;