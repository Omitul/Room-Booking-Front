import { baseApi } from "../../api/baseApi";
type BookingPayload = {
  isConfirmed: string;
};

export const BookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetBookings: builder.query({
      query: () => ({
        url: "bookings",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),

    // DeleteBookings: builder.mutation({
    //   query: (id: string) => ({
    //     url: `bookings/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["posts"],

    UpdateBookings: builder.mutation({
      query: (data: { id: string; payload: BookingPayload }) => {
        console.log("UpdateBookings payload:", data.payload);
        return {
          url: `bookings/${data.id}`,
          method: "PUT",
          body: data.payload,
        };
      },
      invalidatesTags: ["posts"],
    }),

    // }),
  }),
});

export const { useGetBookingsQuery, useUpdateBookingsMutation } = BookingsApi;