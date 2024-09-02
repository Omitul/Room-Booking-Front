import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "../../utils/localStorage";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://room-booking-backend-iota.vercel.app/api/",
  prepareHeaders: (headers) => {
    const token = getTokenFromLocalStorage();
    console.log("EITAI_TOKEN", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["posts"],
  endpoints: () => ({}),
});
