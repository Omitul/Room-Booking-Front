import { baseApi } from "../../api/baseApi";

export const LoginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddLogin: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
    }),

    // GetRoom: builder.query({
    //   query: () => ({
    //     url: "rooms",
    //     method: "GET",
    //   }),
    //   providesTags: ["posts"],
    // }),

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

export const { useAddLoginMutation } = LoginApi;
