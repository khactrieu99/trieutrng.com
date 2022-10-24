import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoadingStatus } from "./LoadingSlice";

const initialState = {
  articles: [],
  currentArticles: [],
  currentTag: "",
  currentViewedSlug: "",
  currentOffset: 5,
}

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async(v, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      dispatch(setLoadingStatus("on"));
      const res = await api.getAllArticles();
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
      rejectWithValue(err.response.data.error)
    } finally {
      dispatch(setLoadingStatus("off"));
    }
  }
)

export const fetchArticleBySlug = createAsyncThunk(
  "articles/fetchArticleBySlug",
  async(slug, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      dispatch(setLoadingStatus("on"));
      const res = await api.getArticleBySlug(slug);
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
      rejectWithValue(err.response.data.error)
    } finally {
      dispatch(setLoadingStatus("off"));
    }
  }
)

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    updateArticles(state, action) {
      state.articles = action.payload;
    },
    updateCurrentViewSlug(state, action) {
      state.currentViewedSlug = action.payload;
    },
    updateCurrentOffset(state, action) {
      state.currentOffset = action.payload;

      if (state.currentTag === "") {
        state.currentArticles = state.articles.slice(0, state.currentOffset);
      } else {
        state.currentArticles = state.articles.filter(art => art.tags.includes(state.currentTag))
                                              .slice(0, state.currentOffset);
      }
    },
    updateCurrentTag(state, action) {
      state.currentOffset = 5;
      state.currentTag = action.payload;

      if (action.payload === "") {
        state.currentArticles = state.articles.slice(0, state.currentOffset);
      } else {
        state.currentArticles = state.articles.filter(art => art.tags.includes(action.payload))
                                              .slice(0, state.currentOffset);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.currentOffset = 5;
        state.currentArticles = state.articles.slice(0, state.currentOffset);
        state.currentTag = "";
      })

    builder
      .addCase(fetchArticleBySlug.fulfilled, (state, action) => {
        const foundIndex = state.articles.findIndex(a => a.slug === action.payload.slug);
        if (foundIndex !== -1) {
          state.articles[foundIndex] = action.payload;
        }
      })
  }
})

export const { updateCurrentTag, updateArticles, updateCurrentViewSlug, updateCurrentOffset } = articleSlice.actions;

export default articleSlice.reducer;