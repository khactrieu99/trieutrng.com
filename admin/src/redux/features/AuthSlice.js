import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async({username, password}, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      const res = await api.doLogin(username, password);
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
      rejectWithValue(err.response.data.error)
    }
  }
)

export const logout = createAsyncThunk(
  "auth/logout",
  async(v, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      const res = await api.doLogout();
      if (res.status === 200) {
        document.cookie = "session" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
      return res.data;
    } catch(err) {
      // move to notification
      console.log(err.response.data.error);
      rejectWithValue(err.response.data.error)
    }
  }
)

const initialState = {
  loggedIn: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    }
  },
  extraReducers: (builder) => {

    builder
    .addCase(login.fulfilled, (state, action) => {
      state.loggedIn = "accept";
    })

    builder
    .addCase(logout.fulfilled, (state, action) => {
      state.loggedIn = "reject";
    })
  }

})

export const { setLoggedIn} = authSlice.actions;

export default authSlice.reducer;