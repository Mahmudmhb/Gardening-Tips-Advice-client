import { baseApi } from "../baseApi/baseApi";
export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => {
        console.log(data); // Make sure this logs the entire data object
        return {
          url: "/post/create",
          method: "POST",
          body: data, // Use `body` to send JSON data in the request
        };
      },
    }),
    getPost: builder.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
    }),
    getMyPost: builder.query({
      query: () => ({
        url: "/post/mypost",
        method: "GET",
      }),
    }),
  }),
});
export const { useCreatePostMutation, useGetPostQuery, useGetMyPostQuery } =
  postApi;
