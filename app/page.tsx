import LogInOut from "./components/LogInOut/LogInOut";
import { signIn, signOut } from "@/auth";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <p>{`Welcome ${session?.user.name}`}</p>
      <LogInOut text={"Sign In"} type={"signIn"} />
      <LogInOut text={"Sign Out"} type={"signOut"} />
    </main>
  );
}
