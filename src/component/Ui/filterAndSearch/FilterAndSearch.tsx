import {
  useGetAllPostQuery,
  useGetCategoryPostQuery,
} from "@/redux/app/featurs/api/post/postApi";
import { TPost } from "@/types/types"; // Assuming this contains your post structure
import React, { useState } from "react";
import PostSection from "@/app/(WithCommonLayout)/(user)/user/dashboard/post/PostSection";
import { categories } from "../postPageEditor";
import { Input, Spinner } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const PostFilterAndSearch = () => {
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const { data, isLoading } = useGetAllPostQuery(undefined);
  const { data: categoryData, isLoading: isCategory } = useGetCategoryPostQuery(
    { category }
  );
  const allPosts = data?.data || [];
  const filteredByCategory = categoryData?.data || [];

  const filteredPosts = allPosts.filter((post: TPost) => {
    if (category) {
      return filteredByCategory.some(
        (catPost: TPost) => catPost._id === post._id
      );
    }
    return post.text.toLowerCase().includes(searchText.toLowerCase());
  });

  const postsToShow = searchText || category ? filteredPosts : allPosts;

  return (
    <div className=" mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>

      <div className="md:flex items-center justify-between">
        <div className="  ">
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",

              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            value={searchText}
            placeholder="Search your favorite posts..."
            size="sm"
            startContent={<FaSearch size={18} />}
            type="search"
          />
        </div>

        <div className=" ">
          <select
            className="border bg-default-400/20 text-default-500 p-2 rounded-md w-full mt-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" className="text-black bg-default-400/20">
              Select Category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="text-black">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        {isLoading ||
          (isCategory && (
            <>
              <div className=" flex justify-center mx-auto">
                <Spinner
                  label="Loading"
                  className="text-center"
                  color="primary"
                  labelColor="primary"
                />
              </div>
            </>
          ))}
        {postsToShow.length > 0 ? (
          postsToShow.map((item: TPost) => (
            <PostSection key={item._id} item={item} />
          ))
        ) : (
          <p>No posts found matching your search or filter.</p>
        )}
      </div>
    </div>
  );
};

export default PostFilterAndSearch;
