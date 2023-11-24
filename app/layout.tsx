import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/mapbox.css";
import NavBar from "./components/NavBar/NavBar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../lib/auth";
import Provider from "./context/context-provider";
import Head from "next/head";
import "mapbox-gl/dist/mapbox-gl.css";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Refresh Feed",
  description: "Food and drink recommendations powered by your friends",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <NavBar />
          <div className="mx-auto max-w-7xl lg:px-8 dark:bg-black bg-white">
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
