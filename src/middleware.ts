import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./lib/Service/AuthServices";

const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  user: [/^\/user/],
  admin: [/^\/admin/],
};

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const userToken = await getCurrentUser();
  const user = userToken?.user;
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user.role && roleBasedRoutes[user.role as Role]) {
    const routes = roleBasedRoutes[user.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  console.log(`Redirecting from ${pathname} to home due to insufficient role.`);
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/user/:page*", "/admin/:page*", "/login", "/register"],
};
