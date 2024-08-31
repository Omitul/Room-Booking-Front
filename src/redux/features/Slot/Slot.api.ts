import { TypeSlot } from "../../../types";
import { baseApi } from "../../api/baseApi";

export const SlotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    Addslot: builder.mutation({
      query: (payload) => ({
        url: "slots",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["posts"],
    }),

    Getslot: builder.query({
      query: () => ({
        url: "slots/availability",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),

    Deleteslot: builder.mutation({
      query: (id: string) => ({
        url: `slots/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),

    Updateslot: builder.mutation({
      query: (data: { id: string; payload: TypeSlot }) => ({
        url: `slots/${data.id}`,
        method: "PUT",
        body: data.payload,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useAddslotMutation,
  useDeleteslotMutation,
  useUpdateslotMutation,
  useGetslotQuery,
} = SlotApi;
