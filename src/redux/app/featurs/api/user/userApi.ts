import { baseApi } from "../baseApi/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    getSingleUser: builder.query({
      query: ({ userID }) => ({
        url: `/user/${userID}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateUser: builder.mutation({
      query: ({ userID, data }) => {
        console.log({ userID, data });
        return {
          url: `/user/${userID}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
    paymentOfVerify: builder.mutation({
      query: ({ payment }) => {
        return {
          url: "user/payment",
          method: "POST",
          body: payment,
        };
      },
    }),
  }),
});
export const {
  useUpdateUserMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery,
  usePaymentOfVerifyMutation,
} = userApi;
