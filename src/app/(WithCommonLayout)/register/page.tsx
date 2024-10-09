/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUser } from "@/types/types";
import { Input, Button, Spacer } from "@nextui-org/react";
import { uploadImage } from "@/utilis/imageBD";
import { toast } from "sonner";
import Link from "next/link";
import { useRegisterUserMutation } from "@/redux/app/featurs/api/auth/authApi";
import { useRouter } from "next/navigation";

const Register = () => {
  const [userRegitser] = useRegisterUserMutation();
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const toastId = toast.loading("logging in", { duration: 1000 });
    if (data.profilePicture && data.profilePicture.length > 0) {
      try {
        const file = data.profilePicture[0] as any;
        const imageUrl = await uploadImage(file);
        console.log(imageUrl);
        data.profilePicture = imageUrl;
        const res = await userRegitser(data).unwrap();
        console.log(data);
        toast.success(`logged in  ${res.data.message}`, {
          id: toastId,
          duration: 1000,
        });
        route.push("/");
        // console.log(res);
      } catch (error: any) {
        // toast.error("Something went wrong", { id: toastId, duration: 1000 });
        toast.error(error.data.message, {
          id: toastId,
          duration: 2000,
        });
        return;
      }
    }
    console.log(data);
    // You can send data to your backend here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 shadow-md rounded-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Create a New Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          It&apos;s quick and easy.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="">
            <Input
              {...register("username", { required: "Name is required" })}
              label="Full Name"
              fullWidth
              className="rounded-md"
            />
            {errors.username && (
              <p className="text-red-600">{errors.username.message}</p>
            )}
          </div>

          <Input
            {...register("email", { required: "Email is required" })}
            label="Email"
            type="email"
            fullWidth
            className="rounded-md"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            label="Password"
            type="password"
            fullWidth
            className="rounded-md"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <Input
            {...register("phone", { required: "Phone number is required" })}
            label="Phone Number"
            type="tel"
            fullWidth
            className="rounded-md"
          />
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}

          <Input
            {...register("address")}
            label="Address"
            fullWidth
            className="rounded-md"
          />
          <div>
            <label className="block text-gray-700 mb-2">Profile Picture</label>
            <input
              {...register("profilePicture")}
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100"
            />
          </div>
          <div className="text-gray-500 text-sm mt-4">
            By clicking Sign Up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms, Data Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Cookies Policy
            </a>
            .
          </div>

          <Spacer y={1} />
          <Button
            type="submit"
            color="primary"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Sign Up
          </Button>
        </form>

        <div className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
