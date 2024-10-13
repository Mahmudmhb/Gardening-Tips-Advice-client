import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
interface DecodedToken {
  email: string;
  role: string;
  iat: number;
  exp: number;
}
export const getCurrentUser = async () => {
  const token = cookies().get("token")?.value;

  let decodedToken = null;

  if (token) {
    try {
      decodedToken = jwtDecode<DecodedToken>(token);
      return {
        user: {
          email: decodedToken.email,
          role: decodedToken.role,
        },
      };
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }

  return null;
};
