import { baseApi } from "../../api/baseApi";

export const CheckoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddOrder: builder.mutation({
      query: (payload) => ({
        url: "checkout",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useAddOrderMutation } = CheckoutApi;
