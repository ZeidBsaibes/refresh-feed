"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function LottieLoader({animation}) {
  const isBrowser = typeof window !== "undefined";

  return (
    <>
      {isBrowser && (
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: "300px", width: "300px" }}
        >
          <Controls visible={false} />
        </Player>
      )}
    </>
  );
}
