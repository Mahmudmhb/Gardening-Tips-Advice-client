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
    createComment: builder.mutation({
      query: ({ postID, commentText }) => {
        console.log(postID, commentText);
        return {
          url: `/post/comments/${postID}`,
          method: "POST",
          body: { commentText },
        };
      },
      invalidatesTags: ["posts"],
    }),
    updateComment: builder.mutation({
      query: ({ postID, commentId, commentText }) => {
        console.log(postID, commentId, commentText);
        return {
          url: `/post/update-commnets/${postID}`,
          method: "PATCH",
          body: { commentId, commentText },
        };
      },
      invalidatesTags: ["posts"],
    }),
    updatePostInDb: builder.mutation({
      query: ({ postID, postData }) => {
        console.log(postID, postData);
        return {
          url: `/post/update/${postID}`,
          method: "PATCH",
          body: postData,
        };
      },
      invalidatesTags: ["posts"],
    }),
    deletePostFromDb: builder.mutation({
      query: ({ postId }) => {
        console.log("Received postId:", postId); // Check if postId is coming correctly here
        return {
          url: `/post/delete/${postId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["posts"],
    }),
    upvotePost: builder.mutation({
      query: ({ postId }) => {
        return {
          url: `/post/upvote/${postId}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["posts"],
    }),
  }),
});
export const {
  useCreatePostMutation,
  useGetAllPostQuery,
  useGetMyPostQuery,
  useCreateCommentMutation,
  useUpdatePostInDbMutation,
  useDeletePostFromDbMutation,
  useUpdateCommentMutation,
  useUpvotePostMutation,
} = postApi;
