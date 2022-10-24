import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "tags"
}

const PageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    }
  }
})

export const { changePage } = PageSlice.actions;

export default PageSlice.reducer;