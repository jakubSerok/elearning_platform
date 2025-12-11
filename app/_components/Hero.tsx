import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full relative h-screen overflow-hidden">
      <Image
        src="/hero.gif"
        alt="hero"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute w-full flex-col items-center mt-20 justify-center text-center ">
        <h2 className="font-bold text-7xl font-game">Start Your </h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-400 "
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000 ",
          }}
        >
          Coding Journey
        </h2>
        <h2 className="mt-5 font-game text-3xl">
          Beginner friendly coding courses and projects
        </h2>
        <Link href="/sign-up">
          <Button className="font-game text-3xl p-6 mt-7" variant="pixel">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
