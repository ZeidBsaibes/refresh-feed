"use client";

import InputWithFixed from "@/app/components/InputWithFixed/InputWithFixed";
import { experimental_taintUniqueValue } from "react";
import { useState } from "react";
import addFriend from "@/scripts/utils/addFriend";
import { useSession } from "next-auth/react";

export default function AddFriend() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const { data: session } = useSession();
  //@ts-ignore
  const userId = session?.user.userId;

  const handleInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setMessage("Email cannot be empty");
    }
    if (email) {
      const response = await addFriend(userId, email);
      setMessage(response?.message);
    }
  };
  return (
    <>
      <div className="flex-col my-4 sm:w-full py-4">
        <h1 className="text-3xl sm:text-4xl px-8 py-4 font-bold tracking-tight text-gray-900 dark:text-white ">
          Add Friend
        </h1>
        <form
          onSubmit={() => handleSubmit(event)}
          className="bg-white w-full dark:bg-black px-8 pb-20 h-full overflow-auto"
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            {`Your Friend's Email Address`}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleInput}
            autoComplete="email"
            className="block w-full md:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="mt-6 flex items-center justify-start gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Request
            </button>
            <p className="text-grey-900 dark:text-white">
              {message && message}{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
