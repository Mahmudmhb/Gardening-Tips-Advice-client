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
    getSinglePost: builder.query({
      query: ({ id }) => {
        console.log("filter category", id);
        return {
          url: `/post/${id}`,
          method: "GET",
        };
      },
      providesTags: ["posts"],
    }),
    getCategoryPost: builder.query({
      query: ({ category }) => {
        console.log("filter category", category);
        return {
          url: `/post/category/${category}`,
          method: "GET",
        };
      },
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
    favoritePost: builder.mutation({
      query: ({ postId }) => {
        return {
          url: `/post/favorite/${postId}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["posts"],
    }),
  }),
});
export const {
  useCreatePostMutation,
  useGetSinglePostQuery,
  useGetAllPostQuery,
  useGetMyPostQuery,
  useCreateCommentMutation,
  useUpdatePostInDbMutation,
  useDeletePostFromDbMutation,
  useUpdateCommentMutation,
  useUpvotePostMutation,
  useGetCategoryPostQuery,
  useFavoritePostMutation,
} = postApi;
