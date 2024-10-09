"use client";

import AboutPage from "./about/page";
import PostPage from "./post/page";

const ProfilePage = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="md:grid grid-cols-7 justify-evenly">
        <div className="col-span-3  space-y-5 sticky top-0">
          <AboutPage />
        </div>
        <div className="col-span-4">
          <PostPage />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
