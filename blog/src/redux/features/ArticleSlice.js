import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ListPost } from "data/ListPost";

const initialState = {
  articles: [],
  currentViewedSlug: "",
  currentOffset: 5
}

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async(v, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      const res = await api.getAllArticles();
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
      rejectWithValue(err.response.data.error)
    }
  }
)

export const fetchArticleBySlug = createAsyncThunk(
  "articles/fetchArticleBySlug",
  async(slug, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      const res = await api.getArticleBySlug(slug);
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
      rejectWithValue(err.response.data.error)
    }
  }
)


const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    updateCurrentViewSlug(state, action) {
      state.currentViewedSlug = action.payload;
    },
    updateCurrentOffset(state, action) {
      state.currentOffset = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      })

    builder
      .addCase(fetchArticleBySlug.fulfilled, (state, action) => {
        const foundIndex = state.articles.findIndex(a => a.slug === action.payload.slug);
        if (foundIndex !== -1) {
          state.articles[foundIndex] = action.payload;
        } else {
          state.articles.push(action.payload)
        }
      })
  }
})

export const { updateCurrentViewSlug, updateCurrentOffset } = articleSlice.actions;

export default articleSlice.reducer;