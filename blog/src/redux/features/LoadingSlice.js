import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "on"
}

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoadingStatus(state, action) {
      state.status = action.payload;
    }
  }
})

export const  { setLoadingStatus } = loadingSlice.actions;

export default loadingSlice.reducer;