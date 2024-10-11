/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useLoginUserMutation } from "@/redux/app/featurs/api/auth/authApi";
import { signUser } from "@/redux/app/featurs/api/auth/authSlice";
import { useAppDispatch } from "@/redux/app/hooks";
import { IUser } from "@/types/types";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();

  const [userLogin] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: "a@gmail.com",
      password: "zxcvbnm",
    },
  });

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const toastId = toast.loading("logging in", { duration: 1000 });
    try {
      const res = await userLogin(data).unwrap();
      console.log(res);
      toast.success("logged in", { id: toastId, duration: 1000 });
      const userData = res?.data.user;
      const token = res?.data.token;
      router.push("/user/dashboard");

      dispatch(signUser({ userData, token }));
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId, duration: 1000 });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              {...register("email", { required: "Email is required" })}
              label="Email"
              type="email"
              fullWidth
              className="rounded-md"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("password", { required: "Password is required" })}
              label="Password"
              type="password"
              fullWidth
              className="rounded-md"
            />
            {errors.password && (
              <p className="text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Login
          </Button>
        </form>

        <div className="text-center mt-6">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="text-center mt-4">
          <span>Don&apos;t have an account? </span>
          <Link
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
