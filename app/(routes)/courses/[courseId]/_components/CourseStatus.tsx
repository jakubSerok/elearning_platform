"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Course } from "../../_components/CourseList";

type Props = {
  courseDetail: Course | undefined;
};
const CourseStatus = ({ courseDetail }: Props) => {
  const [counts, setCounts] = useState<{
    totalExce: number;
    totalXp: number;
  }>();

  useEffect(() => {
    courseDetail && GetCounts();
  }, [courseDetail]);

  const GetCounts = () => {
    let totalExercises = 0;
    let totalXp = 0;
    courseDetail?.chapters?.forEach((chapter) => {
      totalExercises = totalExercises + chapter?.exercises?.length;
      chapter?.exercises?.forEach((exc) => {
        totalXp = totalXp + exc?.xp;
      });
    });

    setCounts({ totalExce: totalExercises, totalXp: totalXp });
  };
  const UpdateProgress = (currentValue: number, totalValue: number) => {
    if (currentValue && totalValue) {
      const perc = (currentValue * 100) / totalValue;
      return perc;
    }
    return 0;
  };
  return (
    <div className="font-game p-4 border-4 rounded-2xl">
      <h2 className="text-3xl">Course Progress</h2>
      <div className="flex items-center gap-5 mt-4">
        <Image src="/diary.png" width={50} height={50} alt="book" />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl ">
            Exercises{" "}
            <span className="text-gray-400">
              {courseDetail?.completeExercises?.length}/{counts?.totalExce}
            </span>
          </h2>
          <Progress
            value={UpdateProgress(
              courseDetail?.completeExercises?.length ?? 0,
              counts?.totalExce || 0
            )}
            className="mt-2"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Image src="/star-glasses.png" width={50} height={50} alt="book" />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl ">
            XP Earned{" "}
            <span className="text-gray-400">
              {courseDetail?.courseEnrolledInfo?.xpEarned}/{counts?.totalXp}
            </span>
          </h2>
          <Progress
            value={UpdateProgress(
              courseDetail?.courseEnrolledInfo?.xpEarned ?? 0,
              counts?.totalXp || 0
            )}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseStatus;
