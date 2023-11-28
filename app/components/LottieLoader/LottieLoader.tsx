"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import loading from "../../../lib/lottie/preparing food.json";

export default function LottieLoader() {
  const isBrowser = typeof window !== "undefined";

  return (
    <>
      {isBrowser && (
        <Player
          autoplay
          loop
          src={loading}
          style={{ height: "300px", width: "300px" }}
        >
          <Controls visible={false} />
        </Player>
      )}
    </>
  );
}
