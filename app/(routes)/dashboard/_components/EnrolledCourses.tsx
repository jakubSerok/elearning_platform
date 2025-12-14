"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-2 font-game">Your enrolled Courses</h2>
      {enrolledCourses?.length == 0 ? (
        <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
          <Image src="/photo-book.png" alt="book" width={90} height={90} />
          <h2 className="font-game text-xl">
            You don't have aby enrolled courses
          </h2>
          <Button variant="pixel" className="font-game text-lg" size={"lg"}>
            Browser All courses
          </Button>
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  );
};

export default EnrolledCourses;
