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
      query: () => ({
        url: "rooms",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),

    // DeleteProduct: builder.mutation({
    //   query: (id: string) => ({
    //     url: `product/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["posts"],
    // }),

    // UpdateProduct: builder.mutation({
    //   query: (data: { id: string; payload: Product }) => ({
    //     url: `product/${data.id}`,
    //     method: "PUT",
    //     body: data.payload,
    //   }),
    //   invalidatesTags: ["posts"],
    // }),
  }),
});

export const { useAddRoomMutation, useGetRoomQuery } = RoomApi;
