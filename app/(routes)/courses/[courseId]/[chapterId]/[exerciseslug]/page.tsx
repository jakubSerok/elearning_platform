"use client";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

// Use dynamic import with ssr: false for client-side only components
const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
  ssr: false,
});
import "react-splitter-layout/lib/index.css";
import { exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";
import CodeEditor from "./_components/CodeEditor";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CompleteExercises } from "../../../_components/CourseList";
import Link from "next/link";
export type CourseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  exercises: exercise[]; // Changed from exercise to exercise[]
  exerciseData: ExerciseData;
  completedExercise: CompleteExercises[];
  slug: string;
  xp: number;
  editorType: string;
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

  const [nextButtonRoute, setNextButtonRoute] = useState<string>();
  const [prevButtonRoute, setPrevButtonRoute] = useState<string>();

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
    if (courseExerciseDetail) {
      GetExerciseDetail();
      GetPrevNextButonRoute();
    }
  }, [courseExerciseDetail, exerciseslug]);

  const GetExerciseDetail = () => {
    const exerciseInfo = courseExerciseDetail?.exercises?.find(
      (item) => item.slug === exerciseslug
    );
    setExerciseInfo(exerciseInfo);
  };

  const GetPrevNextButonRoute = () => {
    if (!courseExerciseDetail?.exercises?.length) return;

    // Current Index of Exercise
    const currentExerciseIndex = courseExerciseDetail.exercises.findIndex(
      (item) => item.slug == exerciseslug
    );

    if (currentExerciseIndex === -1) return;

    // Only get next exercise if it exists
    const nextExercise =
      currentExerciseIndex < courseExerciseDetail.exercises.length - 1
        ? courseExerciseDetail.exercises[currentExerciseIndex + 1]?.slug
        : null;

    // Only get previous exercise if it exists
    const prevExercise =
      currentExerciseIndex > 0
        ? courseExerciseDetail.exercises[currentExerciseIndex - 1]?.slug
        : null;
    setNextButtonRoute(
      nextExercise
        ? `/courses/${courseId}/${chapterId}/${nextExercise}`
        : undefined
    );
    setPrevButtonRoute(
      prevExercise
        ? `/courses/${courseId}/${chapterId}/${prevExercise}`
        : undefined
    );
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
        <Link href={prevButtonRoute ?? "/courses/" + courseId}>
          <Button variant={"pixel"} className="text-xl">
            Previous
          </Button>
        </Link>
        <div className="flex gap-2 items-center">
          <Image src={"/star-glasses.png"} alt="start" width={40} height={40} />
          <h2>
            You can Earn{" "}
            <span className="text-yellow-300 text-xl">{exerciseInfo?.xp}</span>{" "}
            ep
          </h2>
        </div>
        <Link href={nextButtonRoute ?? "/courses/" + courseId}>
          <Button variant={"pixel"} className="text-xl">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Playground;
