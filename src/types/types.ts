type role = "user" | "admin";
export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  followers?: [];
  following?: [];
  verified: boolean;
  phone: string;
  address?: string;
  role: role;
}

export type TPost = {
  _id: string;
  text: string;
  image?: string;
  user: string;
  upvotesCount?: number;
  upvotedUsers?: string;
  category: string;
  premium: boolean;
};
