import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { eq, and } from "drizzle-orm";
import {
  CourseChaptersTable,
  ExerciseTable,
  CompleteExercisesTable,
} from "@/config/schema";
export async function POST(req: NextRequest) {
  const { courseId, chapterId, exerciseId } = await req.json();

  const courseResult = await db
    .select()
    .from(CourseChaptersTable)
    .where(
      and(
        eq(CourseChaptersTable.courseId, courseId),
        eq(CourseChaptersTable.chapterId, chapterId)
      )
    );

  const exerciseResult = await db
    .select()
    .from(ExerciseTable)
    .where(
      and(
        eq(ExerciseTable.courseId, courseId),

        eq(ExerciseTable.exerciseId, exerciseId)
      )
    );
  //Get compltred Exercie in thet course
  const completedExercise = await db
    .select()
    .from(CompleteExercisesTable)
    .where(
      and(
        eq(CompleteExercisesTable?.courseId, courseId),
        eq(CompleteExercisesTable.chapterId, chapterId)
      )
    );
  return NextResponse.json({
    ...courseResult[0],
    exerciseData: exerciseResult[0],
    completedExercise: completedExercise,
  });
}
