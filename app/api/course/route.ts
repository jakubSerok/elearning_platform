import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { CoursesTable } from "@/config/schema";
import { CourseChaptersTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");

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
    return NextResponse.json({ ...result[0], chapters: chapterResult });
  } else {
    const result = await db.select().from(CoursesTable);

    return NextResponse.json(result);
  }
}
