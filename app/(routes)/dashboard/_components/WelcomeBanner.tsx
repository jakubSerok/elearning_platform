"use client";
import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const WelcomeBanner = () => {
  const { user } = useUser();
  return (
    <div className="flex gap-3 items-center">
      <Image src="/machine.webp" alt="robot" width={120} height={120} />
      <h2 className="font-game text-2xl p-4 border bg-zinc-800 rounded-lg rounded-bl-none">
        Welcome Back,<span className="text-yellow-500">{user?.fullName}</span>,
        Start Learning something new...
      </h2>
    </div>
  );
};

export default WelcomeBanner;
