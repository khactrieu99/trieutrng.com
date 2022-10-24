import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  isOpened: false,
  isConfirmed: false,
  isDeclined: false
}

export const openAndCatchEventConfirmPopup = createAsyncThunk(
  "confirmPopup/openAndCatch",
  async(text, { dispatch, extra: { api, store } }) => {
    try {
      dispatch(confirmPopupSlice.actions.open(text));
      return new Promise(resolve => {
        const unsubcribe = store.subscribe(() => {
          const state = store.getState();
          if (state.confirmPopup.isConfirmed) {
            unsubcribe();
            resolve(true);
          }
          if (state.confirmPopup.isDeclined) {
            unsubcribe();
            resolve(false);
          }
        })
      });
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
    } finally {
    }
  }
)

const confirmPopupSlice = createSlice({
  name: "confirmPopup",
  initialState,
  reducers: {
    open(state, action) {
      state.isOpened = true;
      state.isDeclined = false;
      state.isConfirmed = false;
      state.text = action.payload;
    },
    confirm(state) {
      state.isOpened = false;
      state.isConfirmed = true;
      state.isDeclined = false;
    },
    decline(state) {
      state.isOpened = false;
      state.isDeclined = true;
    }
  }
})

export const { open, confirm, decline } = confirmPopupSlice.actions;

export default confirmPopupSlice.reducer;