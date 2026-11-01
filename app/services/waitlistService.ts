
import { api } from "./api"
import axios from "axios"

export interface WaitlistData {
  id: number
  email: string
  createdAt: string
}

export async function joinWaitlist(email: string) {
  const response = await api.post<WaitlistData>(
    "/joinwaitlist",
    { email:email }
  )

  return response.data
}

// export async function getWaitlist(): Promise<WaitlistData[]> {
//   const response = await api.get<WaitlistData[]>("/waitlist")
//   return response.data
// }




export async function getWaitlist(): Promise<WaitlistData[]> {
  const response = await axios.get<WaitlistData[]>(
    "/api/admin/waitlist",
    {
      withCredentials: true,
    }
  )

  return response.data
}
