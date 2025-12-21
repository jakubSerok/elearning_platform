import { db } from "@/config/db";
import {
  CompleteExercisesTable,
  EnrolledCourse,
  usersTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq, sql, and } from "drizzle-orm";
import EnrolledCourses from "@/app/(routes)/dashboard/_components/EnrolledCourses";
export async function POST(req: NextRequest) {
  const { courseId, chapterId, exerciseId, xpEarned } = await req.json();

  const user = await currentUser();

  const result = await db
    .insert(CompleteExercisesTable)
    .values({
      chapterId: chapterId,
      courseId: courseId,
      exerciseId: exerciseId,
      userId: user?.primaryEmailAddress?.emailAddress,
    })
    .returning();

  await db
    .update(EnrolledCourse)
    .set({
      xpEarned: sql`${EnrolledCourse.xpEarned}  + ${xpEarned}`,
    })
    .where(eq(EnrolledCourse?.courseId, courseId));
  //Update Course XP Earned
  await db
    .update(usersTable)
    .set({
      points: sql`${usersTable.points}  + ${xpEarned}`,
    }) //@ts-ignore

    .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

  return NextResponse.json(result);
}
