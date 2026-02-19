"use client";
import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock(); // run immediately
    const interval = setInterval(updateClock, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return <div className="hero-time">{time}</div>;
}
