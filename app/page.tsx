import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import LandingHero from "./components/LandingHero/LandingHero";
import Head from "next/head";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <LandingHero />
      </main>
    </>
  );
}
