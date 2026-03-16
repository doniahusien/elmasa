import { api } from "@/lib/axios"

export const loginApi = (data:unknown) => {
  return api.post("/auth/sign/in", data)
}

export const registerApi = (data:unknown) => {
  return api.post("/auth/sign/up", data)
}