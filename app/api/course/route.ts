import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { CoursesTable, EnrolledCourse } from "@/config/schema";
import { CourseChaptersTable } from "@/config/schema";
import { eq, and } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  const user = await currentUser();

  if (courseId) {
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

    return NextResponse.json({
      ...result[0],
      chapters: chapterResult,
      userEnrolled: isEnrolledCourse,
      courseEnrolledInfo: enrolledCourse[0],
    });
  } else {
    const result = await db.select().from(CoursesTable);

    return NextResponse.json(result);
  }
}
