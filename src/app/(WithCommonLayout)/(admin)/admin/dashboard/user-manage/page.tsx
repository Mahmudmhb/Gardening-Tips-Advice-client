"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { useGetAllUserQuery } from "@/redux/app/featurs/api/user/userApi";
import { IUser } from "@/types/types";
import { motion } from "framer-motion";

const UserActivity = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  const userData = data?.data;
  console.log(userData);

  if (isLoading) {
    return (
      <div className="flex justify-center mx-auto bg-[#18191a] min-h-screen">
        <Spinner className="text-center" color="primary" labelColor="primary" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center flex-col gap-3 bg-[#18191a]  p-4 min-h-screen"
    >
      <Table
        aria-label="User Management Table"
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        className=" text-[#e5e5e5] bg-default-500/20  min-h-screen rounded-lg shadow-md"
      >
        <TableHeader className="bg-[#18191a]">
          <TableColumn className="text-gray-400">NAME</TableColumn>
          <TableColumn className="text-gray-400">Email</TableColumn>
          <TableColumn className="text-gray-400">ROLE</TableColumn>
          <TableColumn className="text-gray-400">STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {userData?.map((user: IUser, index: number) => (
            <TableRow
              key={user._id}
              className={`${
                index % 2 === 0 ? "bg-[#313335]" : "bg-[#2a2b2e]"
              } hover:bg-[#3e4043] transition-all duration-200`}
            >
              <TableCell className="text-[#e5e5e5]">{user.username}</TableCell>
              <TableCell className="text-[#e5e5e5]">{user.email}</TableCell>
              <TableCell className="text-[#e5e5e5]">{user.role}</TableCell>
              <TableCell className="text-[#e5e5e5]">
                {user.verified ? "Verified" : "Not Verified"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default UserActivity;
