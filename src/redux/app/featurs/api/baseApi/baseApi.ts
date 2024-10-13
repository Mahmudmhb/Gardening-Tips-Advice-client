/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/redux/app/store";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://assignment-6-server-steel.vercel.app/api/",

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const BaseQueryWithToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  try {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error) {
      if (result.error.status === 401) {
        toast.error("Your session has expired. Please log in again.");
      } else if (result.error.status === 404) {
        toast.error("Resource not found.");
      } else {
        // toast.error("An error occurred.");
      }
    }

    return result;
  } catch (error) {
    toast.error("Network error or unexpected issue.");
    throw error;
  }
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["users", "posts"],
  baseQuery: BaseQueryWithToken,
  endpoints: () => ({}),
});
