import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signUpThunk } from "./authThunk";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const userCookie = Cookies.get("user");

const initialState = {
  user: userCookie ? JSON.parse(userCookie) : null,
  token: token || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as any;
        state.error = Array.isArray(payload?.data)
          ? payload.data.join(", ")
          : payload?.message || "Login failed";
      })
      .addCase(signUpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as any;
        state.error = Array.isArray(payload?.data)
          ? payload.data.join(", ")
          : payload?.message || "signup failed";
      });
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
