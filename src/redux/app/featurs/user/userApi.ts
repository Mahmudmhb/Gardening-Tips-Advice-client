import { baseApi } from "../api/baseApi/baseApi";

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
  }),
});
export const {
  useUpdateUserMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery,
} = userApi;
