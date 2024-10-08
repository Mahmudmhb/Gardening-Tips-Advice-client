import { baseApi } from "../baseApi/baseApi";
export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    getMyPost: builder.query({
      query: () => ({
        url: "/post/mypost",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    createPost: builder.mutation({
      query: (data) => {
        return {
          url: "/post/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["posts"],
    }),
  }),
});
export const { useCreatePostMutation, useGetAllPostQuery, useGetMyPostQuery } =
  postApi;
