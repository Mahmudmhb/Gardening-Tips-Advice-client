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
