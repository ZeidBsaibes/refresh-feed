export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/add-location", "/user/:path*", "/friends/:path*"],
};
