"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

export type Course = {
  id: number;
  courseId: number;
  title: string;
  desc: string;
  bannerImage: string;
  tag: string;
  level: string;
  chapters?: Chapter[];
  userEnrolled?: boolean;
  courseEnrolledInfo?: CourseEnrolledInfo;
  completeExercises?: CompleteExercises[];
};

export type CourseEnrolledInfo = {
  xpEarned: number;
  enrolledDate: any;
};
export type CompleteExercises = {
  chapterId: number;
  courseId: number;
  exerciseId: number;
};

export type Chapter = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  id: number;
  exercises: exercise[];
};

export type exercise = {
  name: string;
  slug: string;
  xp: number;
  difficulty: string;
};
type Props = {
  smallerCard?: boolean;
  maxLimit?: number;
};
const CourseList = ({ smallerCard = false, maxLimit = 5 }: Props) => {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetAllCourses();
  }, []);
  const GetAllCourses = async () => {
    setLoading(true);
    const result = await axios.get("/api/course");
    setCourseList(result.data);
    setLoading(false);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {courseList?.map(
        (course, index) =>
          maxLimit &&
          maxLimit > index && (
            <Link
              href={`/courses/${course?.courseId}`}
              key={course.id || index}
            >
              <div
                key={course.id || index}
                className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={course?.bannerImage}
                  width={400}
                  height={400}
                  alt={`${course?.title} banner`}
                  className={`w-full ${
                    smallerCard ? "h-[120px]" : "h-[200px]"
                  } object-cover rounded-t-lg`}
                />
                <div className="pt-4">
                  <h2 className="font-game text-2xl">{course?.title}</h2>
                  <p className="font-game text-xl text-gray-600">
                    {course?.desc}
                  </p>
                  <h2 className="bg-zinc-800 flex gap-2 font-game p-1 mt-3 rounded-2xl items-center inline-flex px-4">
                    <ChartNoAxesColumnIncreasing className="h-4 w-4" />
                    {course.level}
                  </h2>
                </div>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default CourseList;
