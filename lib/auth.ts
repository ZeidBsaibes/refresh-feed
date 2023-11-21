// @ts-nocheck

import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.userId = token.userId;
      return session;
    },
  },
};
