"use client";

import AboutPage from "./about/page";
import PostPage from "./post/page";

const ProfilePage = () => {
  return (
    <div className=" bg-[#18191a]  ">
      <div className="md:grid grid-cols-7  justify-evenly">
        <div className="col-span-3  space-y-5 md:sticky top-0">
          <AboutPage />
        </div>
        <div className="col-span-4  min-h-screen">
          <PostPage />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
