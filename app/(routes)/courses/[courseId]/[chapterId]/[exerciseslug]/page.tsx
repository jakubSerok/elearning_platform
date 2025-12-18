"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import { exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";

export type CourseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  exercises: exercise;
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

  return (
    <div className="border-t-4 ">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>
          <ContentSection
            courseExerciseData={courseExerciseDetail}
            loading={loading}
          />
        </div>
        <div>Pane 2</div>
      </SplitterLayout>
    </div>
  );
};

export default Playground;
