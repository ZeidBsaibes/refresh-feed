"use client";

import { signIn, signOut } from "@/auth";

function LogInOut({ text, type }) {
  const handleSignIn = async () => {
    await signIn();
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div>
      {type === "signIn" && <button onClick={handleSignIn}>{`${text}`}</button>}
      {type === "signOut" && (
        <button onClick={handleSignOut}>{`${text}`}</button>
      )}
    </div>
  );
}
export default LogInOut;
