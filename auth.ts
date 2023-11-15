import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Google from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authConfig = {
  // pages: {
  //   signIn: "/login",
  // },
  //   callbacks: {
  //     authorized({ auth, request: { nextUrl } }) {
  //       const isLoggedIn = !!auth?.user;
  //       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
  //       if (isOnDashboard) {
  //         if (isLoggedIn) return true;
  //         return false; // Redirect unauthenticated users to login page
  //       } else if (isLoggedIn) {
  //         return Response.redirect(new URL('/dashboard', nextUrl));
  //       }
  //       return true;
  //     },
  //   },

  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // ...add more providers here
  ],

  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
  }, // Add providers with an empty array for now
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
