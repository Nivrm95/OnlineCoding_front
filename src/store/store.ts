import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./slices/roomSlice";

const roomsStore = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});

export default roomsStore;