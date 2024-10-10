import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { useAppSelector } from "@/redux/app/hooks";
import Image from "next/image";
import {
  FaUserFriends,
  FaNewspaper,
  FaUsers,
  FaVideo,
  FaBook,
  FaStar,
  FaCalendarAlt,
  FaStore,
  FaClock,
  FaBookmark,
  FaCog,
  FaFlag,
  FaGamepad,
  FaMusic,
} from "react-icons/fa"; // Import additional icons

const HomeSideber = () => {
  const user = useAppSelector(useCurrnetUser);

  return (
    <div className="sticky top-0 h-screen overflow-y-auto p-4">
      {/* User Profile */}
      <div className="space-y-6">
        <div className="flex gap-3 items-center">
          <Image
            className="w-12 h-12 rounded-full"
            src={user?.profilePicture as string}
            width={200}
            height={200}
            alt={user?.username as string}
          />
          <h1 className="font-semibold text-lg">{user?.username}</h1>
        </div>

        {/* Sidebar Navigation */}
        <div className="space-y-4">
          {/* Friends */}
          <div className="flex gap-3 items-center">
            <FaUserFriends className="text-xl" />
            <h1 className="font-medium">Friends</h1>
          </div>

          {/* Feeds */}
          <div className="flex gap-3 items-center">
            <FaNewspaper className="text-xl" />
            <h1 className="font-medium">Feeds</h1>
          </div>

          {/* Groups */}
          <div className="flex gap-3 items-center">
            <FaUsers className="text-xl" />
            <h1 className="font-medium">Groups</h1>
          </div>

          {/* Shortcuts */}
          <div className="flex gap-3 items-center">
            <FaBook className="text-xl" />
            <h1 className="font-medium">Shortcuts</h1>
          </div>

          {/* Videos */}
          <div className="flex gap-3 items-center">
            <FaVideo className="text-xl" />
            <h1 className="font-medium">Videos</h1>
          </div>

          {/* Marketplace */}
          <div className="flex gap-3 items-center">
            <FaStore className="text-xl" />
            <h1 className="font-medium">Marketplace</h1>
          </div>

          {/* Memories */}
          <div className="flex gap-3 items-center">
            <FaClock className="text-xl" />
            <h1 className="font-medium">Memories</h1>
          </div>

          {/* Saved */}
          <div className="flex gap-3 items-center">
            <FaBookmark className="text-xl" />
            <h1 className="font-medium">Saved</h1>
          </div>

          {/* Favorites */}
          <div className="flex gap-3 items-center">
            <FaStar className="text-xl" />
            <h1 className="font-medium">Favorites</h1>
          </div>

          {/* Events */}
          <div className="flex gap-3 items-center">
            <FaCalendarAlt className="text-xl" />
            <h1 className="font-medium">Events</h1>
          </div>

          {/* Gaming */}
          <div className="flex gap-3 items-center">
            <FaGamepad className="text-xl" />
            <h1 className="font-medium">Gaming</h1>
          </div>

          {/* Music */}
          <div className="flex gap-3 items-center">
            <FaMusic className="text-xl" />
            <h1 className="font-medium">Music</h1>
          </div>

          {/* Pages */}
          <div className="flex gap-3 items-center">
            <FaFlag className="text-xl" />
            <h1 className="font-medium">Pages</h1>
          </div>

          {/* Settings */}
          <div className="flex gap-3 items-center">
            <FaCog className="text-xl" />
            <h1 className="font-medium">Settings</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSideber;
