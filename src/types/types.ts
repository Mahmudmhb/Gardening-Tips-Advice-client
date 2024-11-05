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
  premium: boolean;
  favorite: [];
}

export type TPost = {
  _id: string;
  text: string;
  image?: string;
  user: IUser;
  upvotesCount?: number;
  upvotedUsers?: string;
  category: string;
  premium: boolean;
  comments: [];
  updatedAt?: string;
  createdAt?: string;
};
export type TCommnets = {
  _id?: string;
  user: IUser;
  comment: string;
};
export type TProps = {
  com: TCommnets;
  item: TPost;
};
