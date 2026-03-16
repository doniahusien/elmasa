import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi,registerApi } from "@/services/useApi";
import Cookies from "js-cookie";
import { LoginFormData, SignUpFormData, SignUpRequest, User } from '@/types';
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data: LoginFormData, thunkAPI) => {
    try {
      const response = await loginApi(data);
      Cookies.set("token", response.data.data.token);
      Cookies.set("user", JSON.stringify(response.data.data));
      return response.data.data as User;
    } catch (error) {
      const apiError = error as any;
      if (
        apiError &&
        apiError.response &&
        apiError.response.data
      ) {
        return thunkAPI.rejectWithValue(apiError.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  },
);

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (data: SignUpRequest, thunkAPI) => {
    try {
      const response = await registerApi(data);
      Cookies.set("token", response.data.data.token);
      Cookies.set("user", JSON.stringify(response.data.data));
      return response.data.data as User;
    } catch (error) {
      const apiError = error as any;
      if (
        apiError &&
        apiError.response &&
        apiError.response.data
      ) {
        return thunkAPI.rejectWithValue(apiError.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  },
);