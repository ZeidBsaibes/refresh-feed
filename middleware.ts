import { authConfig } from "./auth";
import NextAuth from "next-auth";
export const { auth: middleware } = NextAuth(authConfig);
