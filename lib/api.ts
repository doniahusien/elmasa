import { headers } from "next/headers"
import type { ApiResponse } from "@/types"

type FetchOptions = RequestInit & {
  next?: NextFetchRequestConfig
  params?: Record<string, string | number>
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = "ApiError"
  }
}

async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, next, ...rest } = options

  const query = params
    ? "?" + new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      )
    : ""

  const headersList = await headers()
  const locale = headersList.get("accept-language") ?? "en"

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}${query}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
    next,
    ...rest,
  })

  if (!res.ok) {
    const message = await res.text().catch(() => res.statusText)
    throw new ApiError(res.status, message)
  }

  if (res.status === 204) return null as T

  // unwrap the envelope — returns data directly
  const json: ApiResponse<T> = await res.json()
  return json.data
}

export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    apiFetch<T>(endpoint, { method: "GET", ...options }),

  post: <T>(endpoint: string, body: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    }),

  put: <T>(endpoint: string, body: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    }),

  patch: <T>(endpoint: string, body: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...options,
    }),

  delete: <T>(endpoint: string, options?: FetchOptions) =>
    apiFetch<T>(endpoint, { method: "DELETE", ...options }),
}