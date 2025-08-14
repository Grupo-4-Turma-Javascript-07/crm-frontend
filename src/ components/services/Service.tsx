import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})