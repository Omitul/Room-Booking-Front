import { baseApi } from "../../api/baseApi";

export const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    Orderslot: builder.mutation({
      query: (payload) => {
        console.log("ki:", payload);
        return {
          url: "order",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useOrderslotMutation } = OrderApi;
