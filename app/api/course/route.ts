import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import {
  CompleteExercisesTable,
  CoursesTable,
  EnrolledCourse,
} from "@/config/schema";
import { CourseChaptersTable } from "@/config/schema";
import { eq, and, desc, asc, inArray } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  const user = await currentUser();

  if (courseId && courseId !== "enrolled") {
    const result = await db
      .select()
      .from(CoursesTable)
      //@ts-ignore
      .where(eq(CoursesTable.id, courseId));

    const chapterResult = await db
      .select()
      .from(CourseChaptersTable)
      //@ts-ignore

      .where(eq(CourseChaptersTable.courseId, courseId));

    const enrolledCourse = await db
      .select()
      .from(EnrolledCourse)
      .where(
        and(
          //@ts-ignore

          eq(EnrolledCourse.courseId, courseId),
          //@ts-ignore

          eq(EnrolledCourse.userId, user?.primaryEmailAddress?.emailAddress)
        )
      );
    const isEnrolledCourse = enrolledCourse.length > 0 ? true : false;

    const completeExercises = await db
      .select()
      .from(CompleteExercisesTable)
      //@ts-ignore

      .where(
        and(
          //@ts-ignore

          eq(CompleteExercisesTable.courseId, courseId),
          //@ts-ignore

          eq(
            CompleteExercisesTable.userId,
            user?.primaryEmailAddress?.emailAddress
          )
        )
      )
      .orderBy(
        desc(CompleteExercisesTable?.courseId),
        desc(CompleteExercisesTable?.exerciseId)
      );
    return NextResponse.json({
      ...result[0],
      chapters: chapterResult,
      userEnrolled: isEnrolledCourse,
      courseEnrolledInfo: enrolledCourse[0],
      completeExercises: completeExercises,
    });
  } else if (courseId == "enrolled") {
    // 1️⃣ Fetch all enrolled courses for the user
    const enrolledCourses = await db
      .select()
      .from(EnrolledCourse)
      //@ts-ignore
      .where(
        //@ts-ignore

        eq(EnrolledCourse.userId, user?.primaryEmailAddress?.emailAddress)
      );

    if (enrolledCourses.length === 0) {
      return NextResponse.json([]);
    }

    // Extract unique courseIds
    const courseIds = Array.from(
      new Set(enrolledCourses.map((c) => c.courseId))
    );

    // 2️⃣ Fetch all course details in one go
    const courses = await db
      .select()
      .from(CoursesTable)
      //@ts-ignore
      .where(inArray(CoursesTable.courseId, courseIds));

    // 3️⃣ Fetch chapters for all courses
    const chapters = await db
      .select()
      .from(CourseChaptersTable)
      //@ts-ignore
      .where(inArray(CourseChaptersTable.courseId, courseIds))
      .orderBy(asc(CourseChaptersTable.chapterId));

    // 4️⃣ Fetch completed exercises for all courses
    const completed = await db
      .select()
      .from(CompleteExercisesTable)
      //@ts-ignore
      .where(
        and(
          inArray(CompleteExercisesTable.courseId, courseIds),
          eq(
            CompleteExercisesTable.userId,
            user?.primaryEmailAddress?.emailAddress
          )
        )
      )
      .orderBy(
        desc(CompleteExercisesTable.courseId),
        desc(CompleteExercisesTable.exerciseId)
      );

    const finalResult = courses.map((course) => {
      const courseEnrollInfo = enrolledCourses.find(
        (e) => e.courseId === course.courseId
      );

      return {
        ...course,
        chapters: chapters.filter((ch) => ch.courseId === course.courseId),
        completedExercises: completed.filter(
          (cx) => cx.courseId === course.courseId
        ),
        courseEnrolledInfo: courseEnrollInfo,
        userEnrolled: true,
      };
    });

    // ⭐ Format output
    const formattedResult = finalResult.map((item) => {
      // Count total exercises by summing exercises arrays in all chapters
      const totalExercises = item.chapters.reduce((acc, chapter) => {
        // If exercises is stored as JSON/array
        const exercisesCount = Array.isArray(chapter.exercises)
          ? chapter.exercises.length
          : 0;
        return acc + exercisesCount;
      }, 0);

      const completedExercises = item.completedExercises.length;

      return {
        courseId: item.courseId,
        title: item.title,
        bannerImage: item?.bannerImage,
        totalExercises,
        completedExercises,
        expEarned: item.courseEnrolledInfo?.xpEarned || 0,
        level: item.level,
      };
    });

    return NextResponse.json(formattedResult);
  } else {
    const result = await db.select().from(CoursesTable);

    return NextResponse.json(result);
  }
}
