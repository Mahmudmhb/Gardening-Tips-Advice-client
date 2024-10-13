"use client";

import { useGetAllPostQuery } from "@/redux/app/featurs/api/post/postApi";
import { useGetAllUserQuery } from "@/redux/app/featurs/api/user/userApi";
import { Spinner } from "@nextui-org/react";

const Dashboard = () => {
  const { data: User, isLoading } = useGetAllUserQuery(undefined);
  const { data: Posts, isLoading: PostLoading } = useGetAllPostQuery(undefined);
  const userData = User?.data;
  const postData = Posts?.data;
  return (
    <div>
      <div>
        <div className="p-6 bg-gray-50 min-h-screen">
          {" "}
          {/* Light gray background for the whole dashboard */}
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Dashboard Overview
          </h1>
          {isLoading ||
            (PostLoading && (
              <>
                <div className=" flex justify-center mx-auto">
                  <Spinner
                    className="text-center"
                    color="primary"
                    labelColor="primary"
                  />
                </div>
              </>
            ))}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-200 shadow-md h-44 flex flex-col justify-center items-center rounded-lg p-4">
              {" "}
              {/* Green background for this card */}
              <h2 className="text-xl font-semibold text-gray-700">
                Total Users
              </h2>
              <p className="text-5xl font-bold text-green-900">
                {userData?.length}
              </p>
            </div>
            <div className="bg-yellow-200 shadow-md h-44 flex flex-col justify-center items-center rounded-lg p-4">
              {" "}
              <h2 className="text-xl font-semibold text-gray-700">
                Total Posts
              </h2>
              <p className="text-5xl font-bold text-yellow-900">
                {postData?.length}
              </p>
            </div>
            <div className="bg-red-200 shadow-md h-44 flex flex-col justify-center items-center rounded-lg p-4">
              {" "}
              {/* Red background for this card */}
              <h2 className="text-xl font-semibold text-gray-700">
                Total Revenue
              </h2>
              <p className="text-5xl font-bold text-red-900">
                {/* ${totalRevenue?.toFixed(2)} */}
                $5000015
              </p>
            </div>
            {/* Add more statistics as needed, each with a different background color */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
