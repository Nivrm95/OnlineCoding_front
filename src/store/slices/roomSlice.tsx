import { createSlice } from "@reduxjs/toolkit";

export interface IRoom {
  _id: string;
  name: string;
  icon: string;
  description: string;
}

export interface IRoomsState {
  allRooms: IRoom[];
  currentRoom: IRoom | null;
}

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    allRooms: [],
    currentRoom:null,
  } as IRoomsState,
  reducers: {
    getRoomsData: (state, action) => {
      state.allRooms = action.payload;
    },
    setCurrentRoom:(state, action) => {
        state.currentRoom = action.payload;
      },
  },
});


export const { getRoomsData, setCurrentRoom } = roomsSlice.actions;
export default roomsSlice.reducer;