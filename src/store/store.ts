import { configureStore } from "@reduxjs/toolkit";
import roomsReducer, { IRoomsState } from "./slices/roomSlice";

export interface RootState {
  value: IRoomsState;
}


const roomsStore = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});

export default roomsStore;