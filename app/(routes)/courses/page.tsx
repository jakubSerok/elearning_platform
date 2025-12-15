import React from "react";
import Image from "next/image";
import CourseList from "./_components/CourseList";

const Courses = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/banner.jpg"
          alt="Courses Banner"
          width={1200}
          height={300}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-0 h-full pt-24 px-10 md:px-25 lg:px-36 bg-linear-to-r from-black/80 to-white/50">
          <h2 className="font-game text-6xl">Explore All Courese</h2>
          <p className="font-game text-3xl">
            Explore all courses and enrolled to learn and increase your skill!{" "}
          </p>
        </div>
      </div>
      <div className="mt-8 px-10 md:px-25 lg:px-36">
        <h2 className="font-game">All Courses</h2>
        <CourseList />
      </div>
    </div>
  );
};

export default Courses;
