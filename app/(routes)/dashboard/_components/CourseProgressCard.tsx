import React from "react";
import { EnrolledCourseInfo } from "./EnrolledCourses";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

type Props = {
  course: EnrolledCourseInfo;
};

const CourseProgressCard = ({ course }: Props) => {
  return (
    <Link href={"/courses/" + course?.courseId}>
      <div className="border-4 rounded-2xl">
        <Image
          src={course?.bannerImage.trimEnd()}
          alt={course?.title}
          width={500}
          height={500}
          className="w-full h-[170px] rounded-t-xl object-cover"
        />
        <div className="font-game p-4 ">
          <h2 className="text-lg font-light text-gray-500">Course</h2>
          <h2 className="text-3xl ">{course?.title}</h2>
          <h2 className="mt-3 text-lg text-gray-500">
            {course?.completedExercises} Completed{" "}
            <span> out of {course?.totalExercises}</span>
          </h2>
          <Progress
            value={(course?.completedExercises / course?.totalExercises) * 100}
          />
        </div>
      </div>
    </Link>
  );
};

export default CourseProgressCard;
