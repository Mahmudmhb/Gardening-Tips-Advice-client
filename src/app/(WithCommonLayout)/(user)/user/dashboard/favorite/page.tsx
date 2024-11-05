/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { useAppSelector } from "@/redux/app/hooks";
// import PostSection from "../post/PostSection";

const FavoritePage = () => {
  const user = useAppSelector(useCurrnetUser); // Ensure this selector is defined properly
  console.log(user);

  return (
    <div>
      <h1> Favorite Page</h1>
      {user && <p>Welcome, {user.username}!</p>}{" "}
      {/* Display user info if available */}
      {/* {user?.favorite?.length! > 0 &&
        user?.favorite.map((item: any) => (
          <PostSection key={item._id} item={item}></PostSection>
        ))} */}
    </div>
  );
};

export default FavoritePage;
