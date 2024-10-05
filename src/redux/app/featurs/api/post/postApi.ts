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
  }),
});
export const { useCreatePostMutation } = postApi;
