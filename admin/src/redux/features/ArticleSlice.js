import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoadingStatus } from "./LoadingSlice";

const initialState = {
  articles: [],
  currentViewedSlug: "",
  currentOffset: 5
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

export const createArticle = createAsyncThunk(
  "articles/createArticle",
  async(article, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      dispatch(setLoadingStatus("on"));
      const res = await api.createArticle(article);
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

export const updateArticle = createAsyncThunk(
  "articles/updateArticle",
  async(article, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      dispatch(setLoadingStatus("on"));
      const res = await api.updateArticle(article);
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
        }
      })

    builder
      .addCase(createArticle.fulfilled, (state, action) => {
        state.articles = [
          action.payload,
          ...state.articles
        ]
      })

    builder
      .addCase(updateArticle.fulfilled, (state, action) => {
        const foundIndex = state.articles.findIndex(a => a.id === action.payload.id);
        if (foundIndex != -1) {
          state.articles[foundIndex] = action.payload;
        }
      })
  }
})

export const { updateCurrentViewSlug, updateCurrentOffset } = articleSlice.actions;

export default articleSlice.reducer;