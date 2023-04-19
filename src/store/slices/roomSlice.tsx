import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IRooms {
  _id: string;
  name: string;
  icon: string;
  description: string;
}
export interface IRoomsState {
  allRooms: IRooms[];
}

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    allRooms: [],
  } as IRoomsState,
  reducers: {
    getRoomsData: (state, action) => {
      state.allRooms = action.payload;
    },
  },
});

export const { getRoomsData } = roomsSlice.actions;
export default roomsSlice.reducer;