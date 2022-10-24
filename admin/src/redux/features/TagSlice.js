import { setLoadingStatus } from "./LoadingSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tags: []
}

export const fetchTags = createAsyncThunk(
  "tags/fetchTags",
  async(v, { dispatch, extra: { api } }) => {
    try {
      dispatch(setLoadingStatus("on"));
      const res = await api.getAllTags();
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
    } finally {
      dispatch(setLoadingStatus("off"));
    }
  }
)

export const createTag = createAsyncThunk(
  "tags/create",
  async(tag, { dispatch, extra: { api } }) => {
    try {
      dispatch(setLoadingStatus("on"));
      const res = await api.createTag(tag);
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
    } finally {
      dispatch(setLoadingStatus("off"));
    }
  }
)

export const removeTag = createAsyncThunk(
  "tags/remove",
  async(tag, { dispatch, extra: { api, store } }) => {
    try {
      dispatch(setLoadingStatus("on"));
      await api.removeTag(tag);
      return tag;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
    } finally {
      dispatch(setLoadingStatus("off"));
    }
  }
)

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
      })

    builder
      .addCase(createTag.fulfilled, (state, action) => {
        state.tags.push(action.payload.name);
      })

    builder
      .addCase(removeTag.fulfilled, (state, action) => {
        let index = state.tags.indexOf(action.payload);
        if (index !== -1) {
          state.tags.splice(index, 1);
        }
      })
  }
})

export default tagSlice.reducer;