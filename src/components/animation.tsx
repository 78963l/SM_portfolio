import { useState, useEffect } from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/ani.json";

export default function Ani() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <>
      {load && (
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </>
  );
}
