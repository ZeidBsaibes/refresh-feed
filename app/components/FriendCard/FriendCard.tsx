import Badge from "../Badge/Badge";
import Link from "next/link";
const capitalize = require("capitalize");

export default function FriendCard({ friend, status }) {
  return (
    <>
      <li key={friend.id}>
        <Link
          href={status === "approved" ? `/user/${friend.id}/locations` : ""}
        >
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src={friend.image}
            alt={`${friend.name}'s profile image`}
            width="24px"
            height="24px"
            referrerPolicy="no-referrer"
          />
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
            {friend.name}
          </h3>
          {status === "pending" && (
            <Badge
              text={status === "pending" ? capitalize(status) : ""}
              colour={"grey"}
            />
          )}
        </Link>
      </li>
    </>
  );
}
