import { TypeRoom } from "../../../types";
import { baseApi } from "../../api/baseApi";

export const RoomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddRoom: builder.mutation({
      query: (payload) => ({
        url: "rooms",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["posts"],
    }),

    GetRoom: builder.query({
      query: ({ searchTerm = "", sortOption = "priceAscending" }) => ({
        url: "rooms",
        method: "GET",
        params: { search: String(searchTerm), sort: String(sortOption) },
      }),
      providesTags: ["posts"],
    }),

    GetRoomById: builder.query({
      query: (id: string) => ({
        url: `rooms/${id}`,
        method: "GET",
      }),
      providesTags: ["posts"],
    }),

    DeleteRoom: builder.mutation({
      query: (id: string) => ({
        url: `rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),

    UpdateRoom: builder.mutation({
      query: (data: { id: string; payload: TypeRoom }) => ({
        url: `rooms/${data.id}`,
        method: "PUT",
        body: data.payload,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useAddRoomMutation,
  useGetRoomQuery,
  useDeleteRoomMutation,
  useUpdateRoomMutation,
  useGetRoomByIdQuery,
} = RoomApi;
