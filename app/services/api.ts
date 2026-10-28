
import axios from "axios"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
})

export function getApiErrorMessage(
  error: unknown,
  fallback = "Something went wrong. Please try again."
): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data

    if (data && typeof data === "object") {
      const payload = data as {
        err?: unknown
        error?: unknown
        message?: unknown
        details?: unknown
      }

      // Extract the first Zod validation error
      if (Array.isArray(payload.details)) {
        const firstError = payload.details.find(
          (detail) =>
            detail !== null &&
            typeof detail === "object" &&
            "message" in detail &&
            typeof detail.message === "string"
        )

        if (firstError) {
          return firstError.message
        }
      }

      // Extract general backend error messages
      for (const message of [
        payload.err,
        payload.message,
        payload.error,
      ]) {
        if (typeof message === "string") {
          return message
        }
      }
    }

    if (error.code === "ECONNABORTED") {
      return "The request timed out. Please try again."
    }

    if (!error.response) {
      return "Unable to connect to the server. Please try again."
    }
  }

  return  fallback
}
