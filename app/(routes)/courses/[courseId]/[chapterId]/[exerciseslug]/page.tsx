"use client";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import { exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";
import CodeEditor from "./_components/CodeEditor";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export type CourseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  exercises: exercise[]; // Changed from exercise to exercise[]
  exerciseData: ExerciseData;
  slug: string;
  xp: number;
};

type ExerciseData = {
  chapterId: number;
  courseId: number;
  exerciseId: number;
  exerciseName: string;
  exercisesContent: ExerciseContent;
};

type ExerciseContent = {
  content: string;
  hint: string;
  hintXp: string;
  starterCode: any;
  task: string;
};

const Playground = () => {
  const { courseId, chapterId, exerciseslug } = useParams();
  const [loading, setLoading] = useState(false);
  const [courseExerciseDetail, setCourseExerciseDetail] =
    useState<CourseExercise>();

  const [exerciseInfo, setExerciseInfo] = useState<exercise>();
  useEffect(() => {
    GetExerciseCourseDetail();
  }, []);

  const GetExerciseCourseDetail = async () => {
    setLoading(true);
    const result = await axios.post("/api/exercise", {
      courseId: courseId,
      chapterId: chapterId,
      exerciseId: exerciseslug,
    });
    console.log(result.data);
    setCourseExerciseDetail(result.data);
    setLoading(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    courseExerciseDetail && GetExerciseDetail();
  }, [courseExerciseDetail]);

  const GetExerciseDetail = () => {
    const exerciseInfo = courseExerciseDetail?.exercises?.find(
      (item) => item.slug === exerciseslug
    );
    setExerciseInfo(exerciseInfo);
  };
  return (
    <div className="border-t-4 ">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>
          <ContentSection
            courseExerciseData={courseExerciseDetail}
            loading={loading}
          />
        </div>
        <div>
          <CodeEditor
            courseExerciseData={courseExerciseDetail}
            loading={loading}
          />
        </div>
      </SplitterLayout>
      <div className="font-game fixed bottom-0 w-full bg-zinc-900 p-5 flex gap-3 justify-between items-center">
        <Button variant={"pixel"} className="text-xl">
          Previous
        </Button>
        <div className="flex gap-2 items-center">
          <Image src={"/star-glasses.png"} alt="start" width={40} height={40} />
          <h2>
            You can Earn{" "}
            <span className="text-yellow-300 text-xl">{exerciseInfo?.xp}</span>{" "}
            ep
          </h2>
        </div>
        <Button variant={"pixel"} className="text-xl">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Playground;
