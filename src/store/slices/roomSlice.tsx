import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Room {
  _id: string;
  name: string;
  icon: string;
  description: string;
}

interface RoomsState {
  loading: boolean;
  error: string | null;
  data: Room[];
}

const initialState: RoomsState = {
  loading: false,
  error: null,
  data: [],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    getRoomsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getRoomsSuccess(state, action: PayloadAction<Room[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    getRoomsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getRoomsStart, getRoomsSuccess, getRoomsFailure } = roomsSlice.actions;
export default roomsSlice.reducer;