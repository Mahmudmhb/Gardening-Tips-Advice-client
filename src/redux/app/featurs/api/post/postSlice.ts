// Define a type for the slice state

import { RootState } from "@/redux/app/store";
import { TPost } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
type postState = {
  updatePost: TPost | undefined;
};
// Define the initial state using that type
const initialState: postState = {
  updatePost: undefined,
};

export const PostSlice = createSlice({
  name: "posts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // getAllPosr: (state, action: PayloadAction<TPost[]>) => {
    //   const totalCar = action.payload;
    //   const filterCar = totalCar?.filter(
    //     (item) => item.status !== "unavailable"
    //   );
    //   state.car = filterCar;
    // },
    postUpdate: (state, action) => {
      console.log("state fake", action.payload);
      state.updatePost = action.payload;
    },
  },
});

export const { postUpdate } = PostSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const useUpdatePost = (state: RootState) => state.posts.updatePost;

export default PostSlice.reducer;
