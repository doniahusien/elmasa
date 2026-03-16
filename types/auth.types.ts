import { ComponentType } from "react";

export interface LoginFormData {
  phone: string;
  password: string;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  identity_id: string;
  phone: string;
  confirmPassword: string;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  identity_id: string;
  phone: string;
}

export interface ResetFormData {
  password: string;
  confirmPassword: string;
}
export type Feature = {
  id: number;
  icon: ComponentType;
  title: {
    ar: string;
    en: string;
  };
  label: {
    ar: string;
    en: string;
  };
};

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  otp_verified: number;
  token: string;
}
export interface LoginResponse<ApiResponse> {
  data: User;
}
