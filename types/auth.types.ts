import {  ComponentType } from "react"

export interface LoginFormData {
  email: string
  password: string
}

export interface SignUpFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  identity: number
  phone: string
}

export interface ResetFormData {
  password: string
  confirmPassword: string
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